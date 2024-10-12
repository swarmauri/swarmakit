<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let file: File | null = null;
  export let previewUrl: string = '';
  export let errorMessage: string = '';
  export let isDisabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];
      file = selectedFile;
      previewUrl = URL.createObjectURL(selectedFile);
      errorMessage = '';
      dispatch('fileChange', { file });
    } else {
      file = null;
      previewUrl = '';
      errorMessage = 'No file selected';
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      const input = event.target as HTMLInputElement;
      input.click();
    }
  }
</script>

<div class="file-input-container" aria-disabled={isDisabled}>
  <input
    type="file"
    on:change={handleFileChange}
    aria-label="File Input"
    disabled={isDisabled}
    on:keydown={handleKeydown}
  />
  {#if previewUrl}
    <img src={previewUrl} alt="File Preview" class="file-preview" />
  {/if}
  {#if errorMessage}
    <div class="error-message" role="alert">{errorMessage}</div>
  {/if}
</div>

<style lang="css">
  .file-input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input[type='file'] {
    padding: 0.5rem;
    font-size: 1rem;
  }

  .file-preview {
    max-width: 200px;
    max-height: 200px;
    border: 1px solid #ddd;
    margin-top: 0.5rem;
  }

  .error-message {
    color: red;
    font-size: 0.875rem;
  }

  [aria-disabled='true'] input {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
</style>