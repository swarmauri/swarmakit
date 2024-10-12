<script lang="ts">
  export let multiple: boolean = false;
  export let onFilesChange: (files: FileList | null) => void;

  let isDragging = false;
  let progress = 0;

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    onFilesChange(target.files);
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    isDragging = true;
  }

  function handleDragLeave() {
    isDragging = false;
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    isDragging = false;
    onFilesChange(event.dataTransfer?.files || null);
  }

  function simulateUpload() {
    progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  }
</script>

<div 
  class="file-upload-container" 
  on:dragover={handleDragOver} 
  on:dragleave={handleDragLeave} 
  on:drop={handleDrop} 
  aria-label="File upload area"
  role="group"
>
  <input 
    type="file" 
    multiple={multiple} 
    on:change={handleFileChange} 
    on:click={simulateUpload}
  />
  <div class="drag-drop-area" class:is-dragging={isDragging}>
    Drag and drop files here
  </div>
  {#if progress > 0 && progress < 100}
    <div class="upload-progress">Uploading... {progress}%</div>
  {/if}
</div>

<style lang="css">
  @import './FileUpload.css';
</style>