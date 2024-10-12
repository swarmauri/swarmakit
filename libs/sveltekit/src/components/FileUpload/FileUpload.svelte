<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let multiple: boolean = false;
  export let progress: number = 0;
  export let disabled: boolean = false;

  const files = writable<File[]>([]);

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      files.set(Array.from(input.files));
    }
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      files.set(Array.from(event.dataTransfer.files));
    }
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onMount(() => {
    files.subscribe((filesArray) => {
      if (filesArray.length > 0) {
        // Simulate file upload progress for demonstration
        let uploadProgress = 0;
        const interval = setInterval(() => {
          uploadProgress += 10;
          if (uploadProgress > 100) {
            clearInterval(interval);
          }
          progress = uploadProgress;
        }, 100);
      }
    });
  });
</script>

<div 
  class="file-upload-container" 
  on:drop={handleDrop} 
  on:dragover={handleDragOver} 
  aria-label="File Upload"
  role="region"
>
  <input 
    type="file" 
    on:change={handleFileChange} 
    multiple={multiple} 
    disabled={disabled} 
    aria-label="Select files to upload"
  />
  {#if progress > 0 && progress < 100}
    <div class="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div class="progress" style="width: {progress}%"></div>
    </div>
  {/if}
</div>

<style lang="css">
  @import './FileUpload.css';
</style>