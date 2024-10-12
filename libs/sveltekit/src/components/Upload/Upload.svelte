<script lang="ts">
  export enum UploadState {
    Uploading = 'uploading',
    Downloading = 'downloading',
    Completed = 'completed',
    Paused = 'paused',
    Failed = 'failed'
  }

  export let state: UploadState = UploadState.Uploading;
  export let progress: number = 0;
</script>

<div class="upload-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}>
  <div class={`upload ${state}`}>
    <span>{state.charAt(0).toUpperCase() + state.slice(1)}</span>
    <div class="progress-bar" style="width: {progress}%"></div>
  </div>
</div>

<style lang="css">
  @import './Upload.css';
</style>