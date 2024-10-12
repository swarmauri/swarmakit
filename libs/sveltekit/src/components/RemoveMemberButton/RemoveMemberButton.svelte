<script lang="ts">
  export let label: string = 'Remove Member';
  export let disabled: boolean = false;

  const handleClick = () => {
    if (!disabled) {
      // Handle click event
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      handleClick();
    }
  };
</script>

<button 
  class="remove-member-button" 
  on:click={handleClick} 
  on:keydown={handleKeyPress} 
  disabled={disabled} 
  aria-disabled={disabled}
>
  {label}
</button>

<style lang="css">
  @import './RemoveMemberButton.css';
</style>