<script lang="ts">
  export type UploadState = 'uploading' | 'downloading' | 'completed' | 'paused' | 'failed';
  export let state: UploadState = 'uploading';
  export let fileName: string = '';
  export let progress: number = 0;

  function handlePause() {
    if (state === 'uploading') {
      state = 'paused';
    }
  }

  function handleResume() {
    if (state === 'paused') {
      state = 'uploading';
    }
  }
</script>

<div class={`upload upload-${state}`} role="status">
  <span>{fileName}</span>
  {#if state !== 'completed'}
    <div class="progress-bar">
      <div class="progress" style={`width: ${progress}%`}></div>
    </div>
  {/if}
  {#if state === 'paused'}
    <button on:click={handleResume} aria-label="Resume Upload">Resume</button>
  {:else if state === 'uploading'}
    <button on:click={handlePause} aria-label="Pause Upload">Pause</button>
  {/if}
</div>

<style lang="css">
  @import './Upload.css';
</style>