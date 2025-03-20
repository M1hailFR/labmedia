<template>
  <div class="callback d-flex flex-column align-center justify-center" :class="{ 'callback-padding': !disablePadding }">
    <h2
      v-if="formSettings && formSettings.title"
      class="text-center"
      :class="titleColor && `text-${titleColor}`"
    >
      {{ formSettings.title }}
    </h2>
    <div
      v-if="formSettings && formSettings.subtitle"
      class="mt-1 text-caption text-center"
      :class="subtitleColor && `text-${subtitleColor}`"
    >
      {{ formSettings.subtitle }}
    </div>
    <div class="callback--body">
      <v-form
        v-model="isValidForm"
        class="callback--actions mt-6 d-flex flex-column"
        @submit.prevent="onSendForm"
      >
        <v-input label="Имя*" required :rules="namePules" v-model="form.name" />
        <v-input label="Телефон*" v-mask="'mobile'" required :rules="phonePules" v-model="form.phone" />
        <v-input label="Город*" required :rules="namePules" v-model="form.city" />
        <v-input label="Компания*" required :rules="namePules" v-model="form.company" />
        <v-input label="E-mail" required :rules="emailPules" v-model="form.email" />
        <v-textarea-input label="Сообщение" :rules="messagePules" v-model="form.message" />
        <v-button v-if="formSettings && formSettings.buttonText" block type="submit">
          {{ formSettings.buttonText }}
        </v-button>
      </v-form>
      <div
        v-if="formSettings && formSettings.description"
        class="callback--body--description mt-5 mt-sm-10 text-caption text-center text-decoration-none"
        :class="descriptionColor && `text-${descriptionColor}`"
        v-html="formSettings.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VInput, VButton, VTextareaInput } from '@/components/ui';
import { type FormSendStatusType } from '@/core/types/api';
import { type IFormCallbackSettings } from './shared';
import { type ColorsType, ColorsEnum } from '@/core/types/components';
import { namePules, phonePules, emailPules, messagePules } from '@/core/utils/validation';
defineOptions({
  name: 'SharedFormCallback'
});

interface ISharedFormCallbackProps {
  formSettings: IFormCallbackSettings;
  disablePadding?: boolean;
  titleColor?: ColorsType;
  subtitleColor?: ColorsType;
  descriptionColor?: ColorsType;
}

withDefaults(defineProps<ISharedFormCallbackProps>(), {
  disablePadding: false,
  titleColor: ColorsEnum.NEUTRALS_5,
  subtitleColor: ColorsEnum.NEUTRALS_5,
  descriptionColor: ColorsEnum.NEUTRALS_4
});

const emit = defineEmits<{
  'send-form': [status: FormSendStatusType];
}>();

const isValidForm = ref(false);
const form = ref({
  name: '',
  city: '',
  company: '',
  phone: '',
  email: '',
  message: ''
});

const onSendForm = async () => {
  if (isValidForm.value) {
    try {
      // TODO: прикрутить апи и остальную логику
      console.log('типа отправлено');
      emit('send-form', 'success');
      form.value = {
        name: '',
        city: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      };
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      emit('send-form', 'error');
    }
  }
};
</script>

<style lang="scss" scoped>
.callback {
  &-padding {
    padding: 0 20px;
  }

  &--body {
    width: 100%;
    max-width: 375px;
  }

  &--actions {
    row-gap: 8px;
  }
}
</style>
