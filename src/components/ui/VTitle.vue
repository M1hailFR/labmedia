<template>
  <component :is="titleHTML()" />
</template>

<script setup lang="ts">
import { h } from 'vue';

defineOptions({
  name: 'VTitle'
});

interface ITitleProps {
  tag?: string;
  defaultClass?: string;
  additionalClass?: string;
  title: string;
}

const props = withDefaults(defineProps<ITitleProps>(), {
  tag: 'h2',
  defaultClass: 'text-center text-title3 text-md-title1 text-neutrals-5',
  additionalClass: ''
});

const titleHTML = () => {
  return h(props.tag, { innerHTML: props.title, class: `${props.defaultClass} ${props.additionalClass}` });
};
</script>
