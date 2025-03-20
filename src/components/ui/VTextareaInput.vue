<template>
  <v-textarea
    v-model="model"
    variant="outlined"
    :label="label"
    clearable
    :rules="rules"
    :required="required"
    no-resize
    density="comfortable"
    bg-color="neutrals-1"
    base-color="neutrals-3"
    color="neutrals-4"
    rounded="lg"
    class="v-textarea-custom text-caption transition-all"
    v-bind="$attrs"
  >
    <template v-slot:clear>
      <span class="d-inline-flex align-items-center text-neutrals-2" @click="reset">
        <slot name="clear">
          <IconCross size="20" />
        </slot>
      </span>
    </template>
  </v-textarea>
</template>

<script setup lang="ts">
import { IconCross } from "../icons";

defineOptions({
  name: "VTextareaInput"
});

interface ITextareaProps {
  label?: string;
  required?: boolean;
  rules?: Array<(value: any) => boolean | string>;
}

withDefaults(defineProps<ITextareaProps>(), {
  label: "",
  required: false,
  rules: () => []
});

const model = defineModel({ required: true });

const reset = () => {
  model.value = "";
};
</script>
