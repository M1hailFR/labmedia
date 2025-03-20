const emptyRule = (value: string) => {
  return !!value || 'Обязательно для заполнения';
};

export const namePules = [
  emptyRule,
  (value: string) => {
    return value.length >= 2 || 'Поле должно содержать больше 1 символа';
  },
  (value: string) => {
    return /^[а-яёa-z\s]+$/i.test(value) || 'Поле должно содержать только буквы';
  }
];

export const phonePules = [
  emptyRule,
  (value: string) => {
    return /^(\+?7|8)9\d{9}$/i.test(value.replace(/\D/g, '')) || 'Поле должно быть действительным номером телефона';
  }
];

export const emailPules = [
  emptyRule,
  (value: string) => {
    return (
      !value || /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value) || 'Поле должно быть действительной почтой'
    );
  }
];

export const messagePules = [
  emptyRule,
  (value: string) => {
    return value.length >= 30 || 'Поле должно содержать больше 30 символов';
  }
];

