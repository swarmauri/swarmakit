<script lang="ts">
  export let selectedColor: string = '#000000';
  export let isDisabled: boolean = false;

  function handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedColor = input.value;
  }
</script>

<div class="color-picker-container" aria-disabled={isDisabled}>
  <label for="color-picker" aria-label="Select color" tabindex={isDisabled ? undefined : 0}>
    <input 
      type="color" 
      id="color-picker" 
      bind:value={selectedColor} 
      disabled={isDisabled} 
      on:input={handleChange} 
    />
  </label>
</div>

<style lang="css">
  @import './ColorPicker.css';
</style>