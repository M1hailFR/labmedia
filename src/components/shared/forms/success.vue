<template>
  <div class="success d-flex flex-column align-center justify-center" :class="{ 'success-padding': !disablePadding }">
    <div class="d-flex flex-column align-center">
      <div class="success--status rounded-circle pa-4">
        <IconChevron size="32" class="text-brand-1" />
      </div>
      <div class="text-center mt-6 text-title4 text-neutrals-5">Данные успешно отправлены</div>
      <div class="text-center mt-1 text-body2 text-neutrals-5">Ответим вам в течение N минут</div>
      <v-button block class="mt-14" @click="onCloseModal"> Ок </v-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@/components/ui';
import { IconChevron } from '@/components/icons';
defineOptions({
  name: 'SharedFormSuccess'
});

interface ISharedFormSuccessProps {
  disablePadding?: boolean;
}

withDefaults(defineProps<ISharedFormSuccessProps>(), {
  disablePadding: false
});

const emit = defineEmits<{
  close: [];
}>();

const onCloseModal = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
.success {
  &-padding {
    padding: 0 20px;
  }

  &--status {
    background: get-rgb-color(surface-1);
    width: 64px;
    height: 64px;
  }
}
</style>
