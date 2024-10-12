<template>
  <div class="notification-bar" :class="type" role="alert" :aria-live="getAriaLive">
    <span class="icon" aria-hidden="true">{{ getIcon }}</span>
    <span class="message">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SystemAlertGlobalNotificationBar',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'success' | 'error' | 'warning' | 'info'>,
      required: true,
    },
  },
  computed: {
    getIcon(): string {
      switch (this.type) {
        case 'success':
          return '✔️';
        case 'error':
          return '❌';
        case 'warning':
          return '⚠️';
        case 'info':
          return 'ℹ️';
        default:
          return '';
      }
    },
    getAriaLive(): string {
      return this.type === 'error' ? 'assertive' : 'polite';
    },
  },
});
</script>

<style lang="css">
@import './SystemAlertGlobalNotificationBar.css';
</style>