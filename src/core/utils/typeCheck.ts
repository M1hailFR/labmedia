export const isString = (value: unknown) => {
  return typeof value === 'string';
};

export const isNumber = (value: unknown) => {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
};

export const isObject = (value: unknown) => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};
