<script lang="ts">
  export let hasNotifications: boolean = false;
  export let isDismissed: boolean = false;

  function handleClick() {
    if (!isDismissed) {
      // Handle the click event
    }
  }
</script>

<div
  class="notification-bell"
  role="button"
  aria-pressed={hasNotifications}
  on:click={handleClick}
  tabindex="0"
  on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2a9 9 0 00-9 9v5H2v2h20v-2h-1v-5a9 9 0 00-9-9zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" />
  </svg>
  {#if hasNotifications && !isDismissed}
    <span class="notification-dot" aria-label="New notifications"></span>
  {/if}
</div>

<style lang="css">
  @import './NotificationBellIcon.css';
</style>