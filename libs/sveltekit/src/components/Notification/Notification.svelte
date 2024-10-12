<script lang="ts">
  export let isVisible: boolean = true;
  export let type: 'success' | 'error' | 'warning' | 'info' = 'info';
  export let message: string = 'This is a notification message.';

  const dismissNotification = () => {
    isVisible = false;
  };
</script>

{#if isVisible}
  <div class={`notification ${type}`} role="alert">
    <p>{message}</p>
    <button class="dismiss-button" on:click={dismissNotification} aria-label="Dismiss Notification">
      &times;
    </button>
  </div>
{/if}

<style lang="css">
  @import './Notification.css';
</style>