<script lang="ts">
  export let value: string = '';
  export let disabled: boolean = false;

  function handleInput(event: InputEvent) {
    const target = event.target as HTMLTextAreaElement;
    value = target.value;
  }
</script>

<div class="textarea-container">
  <textarea
    class="textarea"
    bind:value={value}
    on:input={handleInput}
    placeholder="Enter text here..."
    disabled={disabled}
    aria-disabled={disabled}
  ></textarea>
</div>

<style lang="css">
  .textarea-container {
    width: 100%;
  }

  .textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  .textarea:disabled {
    background-color: #f5f5f5;
  }
</style>