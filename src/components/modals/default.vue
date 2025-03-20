<template>
  <v-dialog v-model="isActive" max-width="600" min-height="556" max-height="556" class="dialog">
    <div class="dialog--inner flex-grow-1 d-flex align-center rounded-xl py-14">
      <div class="dialog--close" @click="closeModal">
        <IconCross size="24" class="text-neutrals-3" />
      </div>
      <component
        :is="modalContent"
        :form-settings="modalSettings"
        class="flex-grow-1"
        @send-form="setSentStatus"
        @close="closeModal"
      />
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IconCross } from '@/components/icons';
import { SharedFormCallback, SharedFormSuccess } from '@/components/shared';
import { type FormSendStatusType } from '@/core/types/api';
import { type IFormCallbackSettings } from '@/components/shared';

defineOptions({
  name: 'ModalDefault'
});

const props = defineProps<{ modalSettings: IFormCallbackSettings; isSuccess: boolean }>();

const isActive = defineModel<boolean>();
const isSentSuccess = ref(false);

const modalContent = computed(() => {
  if (props.isSuccess) {
    return SharedFormSuccess;
  }
  return  isSentSuccess.value ? SharedFormSuccess : SharedFormCallback;
});

const setSentStatus = (status: FormSendStatusType) => {
  isSentSuccess.value = status === 'success';
};

const closeModal = () => {
  isActive.value = false;
  isSentSuccess.value = false;
};
</script>

<style scoped lang="scss">
.dialog {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  &--inner {
    background: get-rgb-color(neutrals-1);
    position: relative;
  }

  &--close {
    position: absolute;
    top: 24px;
    right: 24px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
