<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let content: string = '';
  export let readOnly: boolean = false;

  const dispatch = createEventDispatcher();
  let editor: HTMLDivElement;

  onMount(() => {
    editor.innerHTML = content;
  });

  function handleInput() {
    if (!readOnly) {
      content = editor.innerHTML;
      dispatch('input', content);
    }
  }
</script>

<div
  class="rich-text-editor"
  contenteditable={!readOnly}
  bind:this={editor}
  on:input={handleInput}
  role="textbox"
  aria-multiline="true"
  aria-readonly={readOnly}
></div>

<style lang="css">
  @import './RichTextEditor.css';
</style>