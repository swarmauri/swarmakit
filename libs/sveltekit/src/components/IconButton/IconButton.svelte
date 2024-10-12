<script lang="ts">
  export let icon: string;
  export let label: string = 'Icon Button';
  export let disabled: boolean = false;
  export let ariaLabel: string = label;
</script>

<button
  type="button"
  disabled={disabled}
  aria-label={ariaLabel}
  class="icon-button"
  on:click={() => {}}
  on:keydown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();
    }
  }}
>
  <img src={icon} alt={ariaLabel} class="icon" />
</button>

<style lang="css">
  .icon-button {
    padding: 0.5rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
</style>