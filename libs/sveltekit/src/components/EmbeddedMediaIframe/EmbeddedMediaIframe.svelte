<script lang="ts">
  export let src: string = '';
  export let title: string = 'Embedded Media';
  export let isFullscreen: boolean = false;
  export let isBuffering: boolean = false;

  function toggleFullscreen() {
    isFullscreen = !isFullscreen;
  }
</script>

<div class="media-container" class:fullscreen={isFullscreen}>
  {#if isBuffering}
    <div class="buffering" role="alert" aria-live="assertive">Buffering...</div>
  {/if}
  <iframe
    src={src}
    title={title}
    frameborder="0"
    allowfullscreen
    class:fullscreen={isFullscreen}
    aria-label={title}
  ></iframe>
  <button on:click={toggleFullscreen} aria-label="Toggle Fullscreen">
    {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
  </button>
</div>

<style lang="css">
  @import './EmbeddedMediaIframe.css';
</style>