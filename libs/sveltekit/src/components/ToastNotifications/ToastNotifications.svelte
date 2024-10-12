<script lang="ts">
  export enum ToastType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Dismissed = 'dismissed'
  }

  export let notifications: { message: string, type: ToastType }[] = [];

  const dismissNotification = (index: number) => {
    notifications = notifications.map((notification, i) => 
      i === index ? { ...notification, type: ToastType.Dismissed } : notification
    );
  };
</script>

<div class="toast-container">
  {#each notifications as { message, type }, index}
    {#if type !== ToastType.Dismissed}
      <div class={`toast ${type}`} role="alert">
        <span>{message}</span>
        <button on:click={() => dismissNotification(index)} aria-label="Dismiss">✖</button>
      </div>
    {/if}
  {/each}
</div>

<style lang="css">
  @import './ToastNotifications.css';
</style>