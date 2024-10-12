<template>
  <div class="color-picker-container">
    <input
      type="color"
      :value="modelValue"
      :disabled="disabled"
      @input="updateColor"
      :aria-disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColorPicker',
  props: {
    modelValue: {
      type: String,
      default: '#000000',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const updateColor = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:modelValue', target.value);
      }
    };

    return {
      updateColor,
    };
  },
});
</script>

<style lang="css">
@import './ColorPicker.css';
</style>