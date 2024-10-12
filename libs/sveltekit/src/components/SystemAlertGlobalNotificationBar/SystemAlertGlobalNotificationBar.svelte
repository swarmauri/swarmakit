<script lang="ts">
  export type AlertType = 'success' | 'error' | 'warning' | 'info';
  export let message: string;
  export let type: AlertType = 'info';
</script>

<div class={`notification-bar ${type}`} role="alert">
  <span class="notification-message">{message}</span>
</div>

<style lang="css">
  @import './SystemAlertGlobalNotificationBar.css';
</style>