
<template>
  <div class="slider-container" :class="{ disabled: isDisabled }">
    <input
      type="range"
      :min="min"
      :max="max"
      :value="value"
      :step="step"
      :disabled="isDisabled"
      @input="updateValue"
      aria-label="Slider"
    />
    <span class="slider-value" v-if="showValue">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Slider',
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 50,
    },
    step: {
      type: Number,
      default: 1,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const updateValue = (event: Event) => {
      const newValue = (event.target as HTMLInputElement).valueAsNumber;
      emit('update:value', newValue);
    };

    return { updateValue };
  },
});
</script>




<style scoped lang="css">
@import './Slider.css';
</style>
