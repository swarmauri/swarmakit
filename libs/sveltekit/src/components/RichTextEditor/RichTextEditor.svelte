<script lang="ts">
  export let content: string = '';
  export let readOnly: boolean = false;

  function handleInput(event: InputEvent) {
    const target = event.target as HTMLDivElement;
    content = target.innerHTML;
  }
</script>

<div 
  class="rich-text-editor" 
  contenteditable={!readOnly}
  bind:innerHTML={content}
  on:input={handleInput}
  aria-readonly={readOnly}
  role="textbox"
>
</div>

<style lang="css">
  .rich-text-editor {
    border: 1px solid #ccc;
    padding: 8px;
    min-height: 100px;
    outline: none;
  }

  .rich-text-editor[contenteditable="true"]:focus {
    border-color: #66afe9;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }

  .rich-text-editor[aria-readonly="true"] {
    background-color: #f9f9f9;
  }
</style>