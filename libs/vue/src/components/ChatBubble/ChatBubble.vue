
<template>
  <div
    class="chat-bubble"
    :class="{ read, unread, hover: isHovered, active }"
    role="alert"
    aria-live="polite"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChatBubble',
  props: {
    read: {
      type: Boolean,
      default: false,
    },
    unread: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isHovered = ref(false);
    return { isHovered };
  },
});
</script>




<style scoped lang="css">
@import './ChatBubble.css';
</style>
