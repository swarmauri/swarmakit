<script lang="ts">
  export let hasNotifications: boolean = false;
  export let dismissed: boolean = false;
</script>

<div class="notification-bell" aria-label="Notification Bell" role="img">
  <svg class="bell-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S11 3.17 11 4v.68C8.63 5.36 7 7.92 7 11v5l-1 1v1h14v-1l-1-1zm-1.5 1h-9v-6c0-2.48 1.51-4.5 3.5-4.5s3.5 2.02 3.5 4.5v6z"></path>
  </svg>
  {#if hasNotifications && !dismissed}
    <span class="notification-badge" aria-label="New Notifications"></span>
  {/if}
</div>

<style lang="css">
  .notification-bell {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
  }

  .bell-icon {
    fill: #333;
  }

  .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background-color: #ff3b30;
    border-radius: 50%;
  }
</style>