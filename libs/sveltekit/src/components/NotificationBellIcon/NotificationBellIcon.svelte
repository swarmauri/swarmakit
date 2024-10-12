<script lang="ts">
  export let hasNotifications: boolean = false;
  export let dismissed: boolean = false;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }

  function handleClick() {
    if (hasNotifications && !dismissed) {
      // Handle notification click logic
    }
  }
</script>

<div
  class="notification-bell"
  role="button"
  tabindex="0"
  aria-label={hasNotifications && !dismissed ? 'You have new notifications' : 'No new notifications'}
  on:click={handleClick}
  on:keydown={handleKeyDown}
  aria-pressed={hasNotifications && !dismissed}>
  <svg class="bell-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C10.3 2 9 3.3 9 5V6.1C5.6 7.2 3 10.4 3 14V17L1 19V20H23V19L21 17V14C21 10.4 18.4 7.2 15 6.1V5C15 3.3 13.7 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"/>
  </svg>
  {#if hasNotifications && !dismissed}
    <span class="notification-dot" aria-label="New notifications"></span>
  {/if}
</div>

<style lang="css">
  @import './NotificationBellIcon.css';
</style>