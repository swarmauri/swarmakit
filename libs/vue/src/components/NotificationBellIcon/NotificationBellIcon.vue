<template>
  <div class="notification-bell" role="button" aria-label="Notification Bell" :aria-pressed="hasNotifications">
    <svg class="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 24c1.104 0 2-.895 2-2h-4c0 1.105.896 2 2 2zm6.364-6.364l-1.415-1.415c-.781-.781-1.176-1.78-1.176-2.828V10c0-3.072-1.992-5.644-4.764-6.32V3c0-.553-.448-1-1-1s-1 .447-1 1v.68C7.218 4.356 5.226 6.928 5.226 10v3.393c0 1.047-.394 2.046-1.176 2.828l-1.415 1.415c-.391.391-.586.902-.586 1.414V21h16v-1.586c0-.512-.195-1.023-.585-1.414z"/>
    </svg>
    <span v-if="hasNotifications" class="notification-dot" aria-hidden="true"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationBellIcon',
  props: {
    hasNotifications: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="css">
@import './NotificationBellIcon.css';
</style>