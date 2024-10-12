<script lang="ts">
  export enum AlertType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info'
  }

  export let type: AlertType = AlertType.Info;
  export let message: string = '';
  export let isVisible: boolean = false;
</script>

{#if isVisible}
  <div class={`notification-bar ${type}`} role="alert">
    <span class="message">{message}</span>
  </div>
{/if}

<style lang="css">
  @import './SystemAlertGlobalNotificationBar.css';
</style>