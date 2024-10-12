<template>
  <div :class="['message-bubble', status]" role="status" :aria-live="status === 'unread' ? 'polite' : 'off'">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageBubble',
  props: {
    status: {
      type: String,
      default: 'unread',
      validator: (value: string) => ['sent', 'received', 'read', 'unread'].includes(value),
    },
  },
});
</script>

<style lang="css">
@import './MessageBubble.css';
</style>