import { shallowRef, onMounted } from 'vue';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiRequestConfig<RequestData, ResponseData> {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: RequestData;
  params?: Record<string, string>;
  immediate?: boolean; // выполнять ли запрос сразу при монтировании
  transform?: (data: ResponseData) => ResponseData; // функция для трансформации ответа
}

interface ApiError {
  message: string;
  code?: number;
  details?: unknown;
}

interface ApiState<T> {
  data: T | null;
  status: number | null;
  loading: boolean;
  success: boolean;
  error: ApiError | null;
  timestamp: number | null; // время последнего успешного запроса
}

export function useApiRequest<RequestData, ResponseData>(
  config: ApiRequestConfig<RequestData, ResponseData>
) {
  const state = shallowRef<ApiState<ResponseData>>({
    data: null,
    status: null,
    loading: false,
    success: false,
    error: null,
    timestamp: null
  });

  // Формируем URL с query параметрами
  const getFullUrl = (): string => {
    const url = new URL(config.url, window.location.origin);
    if (config.params) {
      Object.entries(config.params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    return url.toString();
  };

  // Формируем заголовки запроса
  const getHeaders = (): HeadersInit => {
    return {
      'Content-Type': 'application/json',
      ...(config.headers || {})
    };
  };

  const fetchData = async (): Promise<void> => {
    state.value = {
      ...state.value,
      loading: true,
      success: false,
      error: null
    };

    try {
      const response = await fetch(getFullUrl(), {
        method: config.method,
        headers: getHeaders(),
        body: config.body ? JSON.stringify(config.body) : undefined
      });

      const responseData = await response.json() as ResponseData;

      if (response.ok) {
        state.value = {
          data: config.transform ? config.transform(responseData) : responseData,
          status: response.status,
          loading: false,
          success: true,
          error: null,
          timestamp: Date.now()
        };
      } else {
        state.value = {
          ...state.value,
          status: response.status,
          loading: false,
          error: {
            message: (responseData as unknown as { message?: string })?.message || 'Произошла ошибка при выполнении запроса',
            code: response.status,
            details: responseData
          }
        };
      }
    } catch (err) {
      state.value = {
        ...state.value,
        loading: false,
        error: {
          message: err instanceof Error ? err.message : 'Ошибка сети или сервер недоступен'
        }
      };
    }
  };

  // Сброс состояния
  const reset = (): void => {
    state.value = {
      data: null,
      status: null,
      loading: false,
      success: false,
      error: null,
      timestamp: null
    };
  };

  // Выполняем запрос при монтировании компонента, если задан immediate
  if (config.immediate) {
    onMounted(fetchData);
  }

  return {
    state,
    fetchData,
    reset
  };
} 