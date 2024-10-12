<template>
  <div class="unread-message-counter" v-if="count > 0" aria-label="Unread messages">
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnreadMessageCounter',
  props: {
    count: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0,
    },
  },
});
</script>

<style lang="css">
@import './UnreadMessageCounter.css';
</style>