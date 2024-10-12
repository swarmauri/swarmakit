<template>
  <div class="toggle-switch" :class="{ disabled, on: isOn }" @click="toggle" role="switch" :aria-checked="isOn" :aria-disabled="disabled">
    <div class="toggle-handle"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'ToggleSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOn = computed(() => props.modelValue);

    const toggle = () => {
      if (!props.disabled) {
        emit('update:modelValue', !props.modelValue);
      }
    };

    return {
      isOn,
      toggle,
    };
  },
});
</script>

<style lang="css">
@import './ToggleSwitch.css';
</style>