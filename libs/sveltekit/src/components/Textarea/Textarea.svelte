<script lang="ts">
  export let value: string = '';
  export let disabled: boolean = false;

  function handleInput(event: Event) {
    if (!disabled) {
      value = (event.target as HTMLTextAreaElement).value;
    }
  }
</script>

<textarea
  bind:value={value}
  on:input={handleInput}
  disabled={disabled}
  aria-disabled={disabled}
  rows="4"
  cols="50"
></textarea>

<style lang="css">
  @import './Textarea.css';
</style>