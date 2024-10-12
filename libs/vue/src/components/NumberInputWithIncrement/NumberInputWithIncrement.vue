<template>
  <div class="number-input-container">
    <label :for="id" class="input-label">{{ label }}</label>
    <div class="input-group">
      <button
        type="button"
        @click="decrement"
        :disabled="disabled"
        aria-label="Decrement"
        class="decrement-button"
      >
        -
      </button>
      <input
        type="number"
        :id="id"
        v-model="inputValue"
        :min="min"
        :max="max"
        :step="step"
        class="number-input"
        :disabled="disabled"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :aria-required="required"
        :aria-invalid="!!error"
      />
      <button
        type="button"
        @click="increment"
        :disabled="disabled"
        aria-label="Increment"
        class="increment-button"
      >
        +
      </button>
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NumberInputWithIncrement',
  props: {
    label: {
      type: String,
      default: '',
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
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const inputValue = ref(0);
    const isFocused = ref(false);

    const increment = () => {
      if (inputValue.value < max) {
        inputValue.value += step;
      }
    };

    const decrement = () => {
      if (inputValue.value > min) {
        inputValue.value -= step;
      }
    };

    return {
      inputValue,
      isFocused,
      increment,
      decrement,
    };
  },
});
</script>

<style lang="css">
@import './NumberInputWithIncrement.css';
</style>