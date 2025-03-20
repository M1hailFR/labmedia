<template>
  <v-text-field
    v-model="model"
    variant="outlined"
    clearable
    :label="label"
    required
    density="comfortable"
    bg-color="neutrals-1"
    base-color="neutrals-3"
    color="neutrals-4"
    rounded="lg"
    class="v-input-custom text-caption transition-all"
    v-bind="$attrs"
  >
    <template v-slot:clear>
      <span class="d-inline-flex align-items-center text-neutrals-2" @click="reset">
        <slot name="clear">
          <IconCross size="20" />
        </slot>
      </span>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { IconCross } from "../icons";
defineOptions({
  name: "VInput",
});

interface IInputProps {
  label?: string;
}

withDefaults(defineProps<IInputProps>(), {
  label: "",
});

const model = defineModel({ required: true });

const reset = () => {
  model.value = "";
};
</script>
