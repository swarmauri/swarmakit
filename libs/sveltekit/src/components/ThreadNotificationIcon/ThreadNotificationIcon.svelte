<script lang="ts">
  export let isEnabled: boolean = true;
  export let isMuted: boolean = false;

  function toggleState() {
    if (isEnabled) {
      isMuted = !isMuted;
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleState();
    }
  }
</script>

<div
  class="notification-icon"
  role="button"
  tabindex="0"
  aria-disabled={!isEnabled}
  aria-pressed={isMuted}
  on:click={toggleState}
  on:keydown={handleKeyDown}
>
  🔔
</div>

<style lang="css">
  @import './ThreadNotificationIcon.css';
</style>