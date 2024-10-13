<script lang="ts">
  export let selectedColor: string = "#000000";
  export let disabled: boolean = false;

  function handleColorChange(event: Event) {
    if (!disabled) {
      const input = event.target as HTMLInputElement;
      selectedColor = input.value;
    }
  }
</script>

<div class="color-picker">
  <input 
    type="color" 
    bind:value={selectedColor} 
    on:input={handleColorChange} 
    disabled={disabled} 
    aria-disabled={disabled} 
    aria-label="Color Picker"
  />
</div>

<style lang="css">
  .color-picker input[type="color"] {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .color-picker input[type="color"]:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>