<template>
  <div class="slider-container" :class="{ disabled: isDisabled }">
    <input
      type="range"
      :min="min"
      :max="max"
      :value="value"
      :disabled="isDisabled"
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const currentValue = ref(props.value);

    const updateValue = (event: Event) => {
      const target = event.target as HTMLInputElement;
      currentValue.value = Number(target.value);
      emit('update:value', currentValue.value);
    };

    const isDisabled = computed(() => props.disabled);

    return { currentValue, updateValue, isDisabled };
  },
});
</script>

<style lang="css">
@import './Slider.css';
</style>