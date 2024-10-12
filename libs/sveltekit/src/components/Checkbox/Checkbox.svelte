<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let checked: boolean = false;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function toggleCheck() {
    if (!disabled) {
      checked = !checked;
      dispatch('change', { checked });
    }
  }
</script>

<div
  class="checkbox-container"
  role="checkbox"
  aria-checked={checked}
  aria-disabled={disabled}
  on:click={toggleCheck}
  on:keydown={(event) => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      toggleCheck();
    }
  }}
  tabindex={disabled ? undefined : '0'}
>
  <div class="checkbox">
    {checked ? '✔️' : ''}
  </div>
  <label class="checkbox-label">{checked ? 'Checked' : 'Unchecked'}</label>
</div>

<style lang="css">
  .checkbox-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    opacity: 1;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    background-color: #fff;
  }

  .checkbox-label {
    font-size: 1rem;
  }

  .checkbox-container[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>