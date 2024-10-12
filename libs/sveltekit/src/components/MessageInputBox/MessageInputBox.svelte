<script lang="ts">
  import { onMount } from 'svelte';
  export let value: string = '';
  export let placeholder: string = 'Type a message...';
  export let focused: boolean = false;

  let inputElement: HTMLInputElement;

  onMount(() => {
    if (focused && inputElement) {
      inputElement.focus();
    }
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<input
  type="text"
  bind:value
  placeholder={placeholder}
  class="message-input"
  on:input={handleInput}
  bind:this={inputElement}
/>

<style lang="css">
  @import './MessageInputBox.css';
</style>