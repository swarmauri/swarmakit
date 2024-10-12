<script lang="ts">
  export let uploadState: 'uploading' | 'paused' | 'completed' | 'error' = 'completed';

  function handlePause() {
    if (uploadState === 'uploading') {
      uploadState = 'paused';
    }
  }

  function handleResume() {
    if (uploadState === 'paused') {
      uploadState = 'uploading';
    }
  }
</script>

<div class="video" role="region" aria-label="Video Upload">
  <div class="upload-status">
    {#if uploadState === 'uploading'}
      Uploading...
      <button on:click={handlePause}>Pause</button>
    {:else if uploadState === 'paused'}
      Paused
      <button on:click={handleResume}>Resume</button>
    {:else if uploadState === 'completed'}
      Upload Completed
    {:else if uploadState === 'error'}
      Error
    {/if}
  </div>
</div>

<style lang="css">
  @import './Video.css';
</style>