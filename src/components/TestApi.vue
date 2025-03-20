<template>
  <div class="test-api">
    <h2>Тест API запроса</h2>
    
    <!-- Отображение состояния загрузки -->
    <div v-if="state.loading" class="my-4">
      Загрузка...
    </div>

    <!-- Отображение ошибки -->
    <div v-if="state.error" class="error-block my-4">
      <p class="text-error">{{ state.error.message }}</p>
      <pre>{{ JSON.stringify(state.error.details, null, 2) }}</pre>
    </div>

    <!-- Отображение данных -->
    <div v-if="state.data" class="data-block my-4">
      <h3>Полученные данные:</h3>
      <pre>{{ JSON.stringify(state.data, null, 2) }}</pre>
    </div>

    <!-- Кнопки управления -->
    <div class="actions mt-4">
      <v-button @click="fetchData" :disabled="state.loading" class="mr-2">
        Загрузить данные
      </v-button>
      <v-button @click="reset" variant="outlined">
        Сбросить
      </v-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApiRequest } from '@/composables/useApiRequest';
import { VButton } from '@/components/ui';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const { state, fetchData, reset } = useApiRequest<void, Todo[]>({
  url: 'https://jsonplaceholder.typicode.com/todos',
  method: 'GET',
  transform: (data) => data.slice(0, 5) // берем только первые 5 элементов
});
</script>

<style lang="scss" scoped>
.test-api {
  max-width: 800px;
  margin: 0 auto;

  .error-block {
    padding: 16px;
    background-color: get-rgb-color(danger, 0.1);
    border: 1px solid get-rgb-color(danger);
    border-radius: 8px;
  }

  .data-block {
    padding: 16px;
    background-color: get-rgb-color(surface-2);
    border-radius: 8px;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
}
</style> 