<template>
  <div class="range-slider-container">
    <input
      type="range"
      :id="id"
      :min="min"
      :max="max"
      v-model="modelValue"
      :step="step"
      :disabled="disabled"
      class="range-slider"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="modelValue"
      :aria-disabled="disabled"
    />
    <label :for="id" class="range-label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RangeSlider',
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    modelValue: {
      type: Number as PropType<number | null>,
      default: null,
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
@import './RangeSlider.css';
</style>