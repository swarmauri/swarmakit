<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let multiple: boolean = false;
  export let progress: number = 0;

  let files: File[] = [];
  const dispatch = createEventDispatcher();

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    files = Array.from(input.files || []);
    dispatch('filechange', files);
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    files = Array.from(event.dataTransfer?.files || []);
    dispatch('filechange', files);
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }
</script>

<div class="file-upload">
  <input 
    type="file" 
    on:change={handleFileChange} 
    {multiple} 
    aria-label={multiple ? "Upload Files" : "Upload File"}
  />
  <div 
    class="drop-zone" 
    on:drop={handleDrop} 
    on:dragover={handleDragOver} 
    aria-label="Drag and drop files here"
  >
    Drag and Drop Files Here
  </div>
  {#if progress > 0}
    <div class="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div class="progress" style="width: {progress}%"></div>
    </div>
  {/if}
</div>

<style lang="css">
  .file-upload input[type="file"] {
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  .file-upload .drop-zone {
    margin-top: 10px;
    padding: 20px;
    border: 2px dashed #ccc;
    border-radius: 4px;
    text-align: center;
    color: #aaa;
  }

  .file-upload .progress-bar {
    margin-top: 10px;
    height: 20px;
    background-color: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
  }

  .file-upload .progress {
    height: 100%;
    background-color: #007bff;
    transition: width 0.4s ease;
  }
</style>