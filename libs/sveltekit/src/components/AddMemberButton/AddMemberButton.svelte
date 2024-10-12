<script lang="ts">
  export let label: string = 'Add Member';
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
  class="add-member-button" 
  on:click={handleClick} 
  on:keydown={handleKeyPress} 
  disabled={disabled} 
  aria-disabled={disabled}
>
  {label}
</button>

<style lang="css">
  @import './AddMemberButton.css';
</style>