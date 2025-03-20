<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 32 33"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`"
  >
    <path
      d="M28 15.83a11.2 11.2 0 0 1-1.2 5.067 11.33 11.33 0 0 1-10.133 6.266 11.2 11.2 0 0 1-5.067-1.2L4 28.497l2.533-7.6a11.2 11.2 0 0 1-1.2-5.067A11.33 11.33 0 0 1 11.6 5.697a11.2 11.2 0 0 1 5.067-1.2h.666A11.306 11.306 0 0 1 28 15.163z"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from './shared';
defineOptions({
  name: 'IconChat'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
