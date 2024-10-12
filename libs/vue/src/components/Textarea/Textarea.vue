<template>
  <div class="textarea-container" :class="{ disabled }">
    <textarea
      :placeholder="placeholder"
      v-model="textValue"
      :disabled="disabled"
      :aria-label="ariaLabel"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Textarea',
  props: {
    placeholder: {
      type: String,
      default: 'Enter text...',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: 'Text area',
    },
  },
  setup() {
    const textValue = ref('');

    return {
      textValue,
    };
  },
});
</script>

<style lang="css">
@import './Textarea.css';
</style>