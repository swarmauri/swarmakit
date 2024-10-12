<script lang="ts">
  import { onMount } from 'svelte';
  export let content: string = '';
  export let readOnly: boolean = false;
  let editor: HTMLDivElement;

  onMount(() => {
    if (!readOnly) {
      editor.contentEditable = "true";
    }
  });

  function handleInput(event: InputEvent) {
    const target = event.target as HTMLDivElement;
    content = target.innerHTML;
  }
</script>

<div
  bind:this={editor}
  class="rich-text-editor"
  on:input={handleInput}
  role="textbox"
  aria-multiline="true"
  aria-readonly={readOnly}
  tabindex="0"
>
  {@html content}
</div>

<style lang="css">
  @import './RichTextEditor.css';
</style>