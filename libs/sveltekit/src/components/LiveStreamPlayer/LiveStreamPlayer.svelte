<script lang="ts">
  export let isLive: boolean = true;
  export let isPaused: boolean = false;
  export let isBuffering: boolean = false;
  export let isMuted: boolean = false;

  function togglePlayPause() {
    isPaused = !isPaused;
  }

  function toggleMute() {
    isMuted = !isMuted;
  }
</script>

<div class="player-container" role="application" aria-label="Live Stream Player">
  <div class="video-placeholder" aria-hidden={isBuffering || isPaused}>
    {#if isBuffering}
      <div class="status" role="status" aria-live="polite">Buffering...</div>
    {:else if isPaused}
      <div class="status" role="status" aria-live="polite">Paused</div>
    {:else if isLive}
      <div class="status" role="status" aria-live="polite">Live</div>
    {/if}
  </div>
  <div class="controls">
    <button on:click={togglePlayPause} aria-pressed={isPaused}>
      {#if isPaused}Play{#else}Pause{/if}
    </button>
    <button on:click={toggleMute} aria-pressed={isMuted}>
      {#if isMuted}Unmute{#else}Mute{/if}
    </button>
  </div>
</div>

<style lang="css">
  @import './LiveStreamPlayer.css';
</style>