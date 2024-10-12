<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      :disabled="disabled"
      @change="toggle"
      :aria-checked="checked"
      :aria-disabled="disabled"
    />
    <label :for="id"><slot /></label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'Checkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: () => `checkbox-${Math.random().toString(36).substr(2, 9)}`,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const checked = ref(props.modelValue);

    const toggle = () => {
      if (!props.disabled) {
        emit('update:modelValue', !checked.value);
      }
    };

    watch(() => props.modelValue, (newVal) => {
      checked.value = newVal;
    });

    return {
      checked,
      toggle,
    };
  },
});
</script>

<style lang="css">
@import './Checkbox.css';
</style>