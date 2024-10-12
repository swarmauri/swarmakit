<script lang="ts">
  export let isPlaying: boolean = false;
  export let isPaused: boolean = true;
  export let isBuffering: boolean = false;
  export let isFullscreen: boolean = false;
  export let areSubtitlesOn: boolean = false;
  export let isPiPMode: boolean = false;

  function togglePlayPause() {
    isPlaying = !isPlaying;
    isPaused = !isPaused;
  }

  function toggleFullscreen() {
    isFullscreen = !isFullscreen;
  }

  function toggleSubtitles() {
    areSubtitlesOn = !areSubtitlesOn;
  }

  function togglePiPMode() {
    isPiPMode = !isPiPMode;
  }
</script>

<div class="video-player-advanced" role="region" aria-label="Advanced Video Player">
  <video controls bind:currentTime bind:paused={isPaused}>
    <source src="video.mp4" type="video/mp4" />
    {#if areSubtitlesOn}
      <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English" default />
    {/if}
    Your browser does not support the video tag.
  </video>
  <div class="player-controls">
    <button on:click={togglePlayPause} aria-pressed={isPlaying}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
    <button on:click={toggleFullscreen} aria-pressed={isFullscreen}>
      {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
    </button>
    <button on:click={toggleSubtitles} aria-pressed={areSubtitlesOn}>
      {areSubtitlesOn ? 'Subtitles Off' : 'Subtitles On'}
    </button>
    <button on:click={togglePiPMode} aria-pressed={isPiPMode}>
      {isPiPMode ? 'Exit PiP' : 'PiP Mode'}
    </button>
  </div>
</div>

<style lang="css">
  @import './VideoPlayerAdvanced.css';
</style>