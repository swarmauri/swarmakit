<template>
  <div class="input-field-container">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      v-model="inputValue"
      class="input-field"
      :aria-required="required"
      :aria-invalid="!!error"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InputFields',
  props: {
    type: {
      type: String,
      default: 'text',
    },
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
  },
  setup() {
    const inputValue = ref('');

    return {
      inputValue,
    };
  },
});
</script>

<style lang="css">
@import './InputFields.css';
</style>