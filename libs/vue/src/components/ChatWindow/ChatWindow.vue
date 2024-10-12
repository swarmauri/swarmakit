<template>
  <div class="chat-window" :class="state" role="dialog" aria-label="Chat Window">
    <header class="chat-header" aria-label="Chat Window Header">
      <button @click="toggleState" aria-controls="chat-content" aria-expanded="isOpen">
        {{ buttonText }}
      </button>
    </header>
    <section id="chat-content" v-if="isOpen" class="chat-content" aria-live="polite">
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ChatWindow',
  props: {
    state: {
      type: String as PropType<'open' | 'closed' | 'minimized' | 'maximized'>,
      default: 'closed',
      validator: (value: string) => ['open', 'closed', 'minimized', 'maximized'].includes(value),
    },
  },
  setup(props) {
    const isOpen = computed(() => props.state !== 'closed');
    const buttonText = computed(() => (props.state === 'open' ? 'Close' : 'Open'));

    const toggleState = () => {
      if (props.state === 'open') {
        props.state = 'closed';
      } else {
        props.state = 'open';
      }
    };

    return { isOpen, buttonText, toggleState };
  },
});
</script>

<style lang="css">
@import './ChatWindow.css';
</style>