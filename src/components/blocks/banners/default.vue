<template>
  <section class="banner">
    <v-container>
      <div class="py-10">
        <v-title v-if="fields.title" :title="fields.title" />
      </div>

      <div class="banner--wrapper">
        <div v-if="fields.formSettings" class="banner--left">
          <SharedFormCallback :form-settings="fields.formSettings" class="flex-grow-1" @send-form="setSentStatus" />
          <ModalDefault v-model="isModalOpen" :modal-settings="fields.formSettings" :is-success="isSuccess" />
        </div>
        <div class="banner--right">
          <TestApi />
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VButton, VTitle } from '@/components/ui';
import { type SizesType, type IFieldsProps } from '@/core/types/components';
import { SharedFormCallback } from '@/components/shared';
import { type FormSendStatusType } from '@/core/types/api';
import { type IFormCallbackSettings } from '@/components/shared';
import { ModalDefault } from '@/components/modals';
import TestApi from '@/components/TestApi.vue';

const isModalOpen = ref(false);
const isSuccess = ref(false);

defineOptions({
  name: 'BlockBannerDefault'
});

interface IBannerDefautProps {
  title: string | null;
  subtitle?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
  image?: string | null;
  size?: SizesType;
  formSettings?: IFormCallbackSettings;
}

const { fields } = defineProps<IFieldsProps<IBannerDefautProps>>();

const setSentStatus = (status: FormSendStatusType) => {
  isSuccess.value = status === 'success';
  if (status === 'success') {
    isModalOpen.value = true;
  }
};

const isSingle = computed(() => {
  return !fields.image;
});
</script>

<style lang="scss" scoped>
.banner {
  $root: '.banner';

  &--wrapper {
    height: 100%;
    display: grid;

    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
    }

    &-single {
      grid-template-columns: repeat(1, 1fr);

      & #{$root}--left--inner {
        max-width: 589px;
      }
    }

    &-with-cards {
      row-gap: 24px;
      column-gap: 40px;
    }
  }

  &--cards {
    grid-row: 1;

    @media screen and (min-width: 768px) {
      grid-column: 2;
    }
  }
}
</style>
