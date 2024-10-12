<template>
  <div class="masked-input-container">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :type="isMasked ? 'password' : 'text'"
      :id="id"
      :placeholder="placeholder"
      v-model="inputValue"
      class="masked-input"
      :disabled="disabled"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :aria-required="required"
      :aria-invalid="!!error"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MaskedInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
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
    isMasked: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const inputValue = ref('');
    const isFocused = ref(false);

    return {
      inputValue,
      isFocused,
    };
  },
});
</script>

<style lang="css">
@import './MaskedInput.css';
</style>