<template>
  <div
    class="chat-bubble"
    :class="{ read, unread, hover, active }"
    role="alert"
    :aria-live="active ? 'assertive' : 'polite'"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @focus="active = true"
    @blur="active = false"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChatBubble',
  props: {
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    unread: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const hover = ref(false);
    const active = ref(false);
    return { hover, active };
  },
});
</script>

<style lang="css">
@import './ChatBubble.css';
</style>