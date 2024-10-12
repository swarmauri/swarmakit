<script lang="ts">
  export let isPlaying: boolean = false;
  export let isPaused: boolean = true;
  export let isBuffering: boolean = false;
  export let isFullscreen: boolean = false;

  function togglePlayPause() {
    isPlaying = !isPlaying;
    isPaused = !isPaused;
  }

  function enterFullscreen() {
    isFullscreen = true;
  }

  function exitFullscreen() {
    isFullscreen = false;
  }

  function toggleFullscreen() {
    isFullscreen ? exitFullscreen() : enterFullscreen();
  }
</script>

<div class="video-player" role="region" aria-label="Video Player">
  <video controls bind:currentTime bind:paused={isPaused}>
    <source src="video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="player-controls">
    <button on:click={togglePlayPause} aria-pressed={isPlaying}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
    <button on:click={toggleFullscreen} aria-pressed={isFullscreen}>
      {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
    </button>
  </div>
</div>

<style lang="css">
  @import './VideoPlayer.css';
</style>