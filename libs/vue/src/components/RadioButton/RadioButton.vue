<template>
  <div class="radio-button-container">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      v-model="modelValue"
      :disabled="disabled"
      class="radio-button"
      :aria-checked="modelValue === value"
      :aria-disabled="disabled"
    />
    <label :for="id" class="radio-label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RadioButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String as PropType<string | null>,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
});
</script>

<style lang="css">
@import './RadioButton.css';
</style>