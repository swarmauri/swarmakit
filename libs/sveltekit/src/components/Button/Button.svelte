<script lang="ts">
  export let label: string = 'Button';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let ariaLabel: string = label;
</script>

<button
  type={type}
  disabled={disabled}
  aria-label={ariaLabel}
  class="button"
  on:click={() => {}}
  on:keydown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();
    }
  }}
>
  {label}
</button>

<style lang="css">
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>