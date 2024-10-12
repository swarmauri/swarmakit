<template>
  <div class="message-input-box" :class="state">
    <input
      type="text"
      :value="text"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      :aria-label="`Message input, current state: ${state}`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MessageInputBox',
  props: {
    state: {
      type: String,
      default: 'unfocused',
      validator: (value: string) => ['focused', 'unfocused', 'typing', 'empty'].includes(value),
    },
    text: {
      type: String,
      default: '',
    },
  },
  emits: ['update:state', 'update:text'],
  setup(props, { emit }) {
    const handleFocus = () => {
      emit('update:state', props.text ? 'typing' : 'focused');
    };

    const handleBlur = () => {
      emit('update:state', props.text ? 'typing' : 'unfocused');
    };

    const handleInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      emit('update:text', value);
      emit('update:state', value ? 'typing' : 'empty');
    };

    return {
      handleFocus,
      handleBlur,
      handleInput,
    };
  },
});
</script>

<style lang="css">
@import './MessageInputBox.css';
</style>