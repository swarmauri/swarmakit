<script lang="ts">
  export let notificationsEnabled: boolean = true;
  export let muted: boolean = false;

  function handleToggle() {
    if (!muted) {
      notificationsEnabled = !notificationsEnabled;
    }
  }
</script>

<div 
  class="group-chat-notifications" 
  role="button" 
  aria-pressed={notificationsEnabled}
  tabindex="0"
  on:click={handleToggle} 
  on:keydown={(e) => e.key === 'Enter' ? handleToggle() : null}
>
  {#if muted}
    <span>Notifications are muted</span>
  {:else if notificationsEnabled}
    <span>Notifications are enabled</span>
  {:else}
    <span>Notifications are disabled</span>
  {/if}
</div>

<style lang="css">
  @import './GroupChatNotifications.css';
</style>