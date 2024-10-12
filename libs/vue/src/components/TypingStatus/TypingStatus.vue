<template>
  <div v-if="isVisible" class="typing-status" role="status">
    <span v-if="isTyping" class="typing-indicator">Typing...</span>
    <span v-else-if="isPaused" class="paused-indicator">Paused</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TypingStatus',
  props: {
    state: {
      type: String as PropType<'visible' | 'hidden' | 'typing' | 'paused'>,
      default: 'hidden',
      validator: (value: string) => ['visible', 'hidden', 'typing', 'paused'].includes(value),
    },
  },
  setup(props) {
    const isVisible = computed(() => props.state !== 'hidden');
    const isTyping = computed(() => props.state === 'typing');
    const isPaused = computed(() => props.state === 'paused');

    return { isVisible, isTyping, isPaused };
  },
});
</script>

<style lang="css">
@import './TypingStatus.css';
</style>