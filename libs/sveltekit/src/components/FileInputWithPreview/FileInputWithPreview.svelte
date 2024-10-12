<script lang="ts">
  import { onMount } from 'svelte';

  export let file: File | null = null;
  export let previewUrl: string = '';
  export let errorMessage: string = '';
  export let disabled: boolean = false;

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      file = input.files[0];
      previewUrl = URL.createObjectURL(file);
    }
  }

  onMount(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  });
</script>

<div class="file-input-container" role="region" aria-labelledby="file-upload">
  <label for="file-upload" aria-label="Upload a file">
    <input 
      type="file" 
      id="file-upload" 
      on:change={handleFileChange} 
      disabled={disabled} 
    />
  </label>
  {#if errorMessage}
    <p class="error" aria-live="assertive">{errorMessage}</p>
  {/if}
  {#if previewUrl}
    <img src={previewUrl} alt="File preview" class="preview" />
  {/if}
</div>

<style lang="css">
  @import './FileInputWithPreview.css';
</style>