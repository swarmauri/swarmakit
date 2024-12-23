
<template>
  <div
    class="notification-bar"
    :class="type"
    role="alert"
    :aria-live="type === 'error' ? 'assertive' : 'polite'"
  >
    <span class="notification-message">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SystemAlertGlobalNotificationBar',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string) => ['success', 'error', 'warning', 'info'].includes(value),
    },
    message: {
      type: String,
      required: true,
    },
  },
});
</script>




<style scoped lang="css">
@import './SystemAlertGlobalNotificationBar.css';
</style>
