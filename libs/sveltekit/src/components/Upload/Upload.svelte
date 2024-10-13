<script lang="ts">
  export let status: 'uploading' | 'downloading' | 'completed' | 'paused' | 'failed' = 'completed';
  export let progress: number = 0;

  const getStatusMessage = () => {
    switch (status) {
      case 'uploading':
        return 'Uploading...';
      case 'downloading':
        return 'Downloading...';
      case 'completed':
        return 'Completed';
      case 'paused':
        return 'Paused';
      case 'failed':
        return 'Failed';
      default:
        return '';
    }
  };
</script>

<div class="upload" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
  <div class="upload-status">{getStatusMessage()}</div>
  <div class="progress-bar">
    <div class="progress" style="width: {progress}%"></div>
  </div>
</div>

<style lang="css">
  .upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px 0;
  }

  .upload-status {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .progress-bar {
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress {
    height: 10px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }
</style>