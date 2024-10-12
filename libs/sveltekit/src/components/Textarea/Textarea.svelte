<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let value: string = '';
  export let placeholder: string = 'Enter text...';
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    value = target.value;
    dispatch('input', { value });
  }
</script>

<div class="textarea-container" aria-disabled={disabled}>
  <textarea
    bind:value={value}
    placeholder={placeholder}
    on:input={handleInput}
    disabled={disabled}
    aria-label="Text input"
  ></textarea>
</div>

<style lang="css">
  @import './Textarea.css';
</style>