<script lang="ts">
  export let isChecked: boolean = false;
  export let isDisabled: boolean = false;
  export let label: string = '';

  function toggleCheck() {
    if (!isDisabled) {
      isChecked = !isChecked;
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleCheck();
    }
  }
</script>

<div 
  class="checkbox-container" 
  role="checkbox" 
  aria-checked={isChecked} 
  tabindex={isDisabled ? undefined : 0} 
  aria-disabled={isDisabled}
  on:click={toggleCheck} 
  on:keypress={handleKeyPress}
>
  <input 
    type="checkbox" 
    bind:checked={isChecked} 
    disabled={isDisabled} 
    aria-hidden="true"
  />
  <span>{label}</span>
</div>

<style lang="css">
  @import './Checkbox.css';
</style>