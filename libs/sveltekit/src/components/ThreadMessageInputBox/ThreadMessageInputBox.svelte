<script lang="ts">
  export let isFocused: boolean = false;
  export let isTyping: boolean = false;
  export let message: string = '';

  function handleFocus(event: FocusEvent) {
    isFocused = true;
  }

  function handleBlur(event: FocusEvent) {
    isFocused = false;
  }

  function handleInput(event: InputEvent) {
    message = (event.target as HTMLInputElement).value;
    isTyping = message.length > 0;
  }
</script>

<input
  type="text"
  class={`message-input-box ${isFocused ? 'focused' : 'unfocused'} ${isTyping ? 'typing' : 'empty'}`}
  bind:value={message}
  on:focus={handleFocus}
  on:blur={handleBlur}
  on:input={handleInput}
  aria-label="Message Input Box"
/>

<style lang="css">
  @import './ThreadMessageInputBox.css';
</style>