<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let checked: boolean = false;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleToggle() {
    if (!disabled) {
      checked = !checked;
      dispatch('toggle', { checked });
    }
  }
</script>

<div
  class="toggle-switch"
  role="switch"
  aria-checked={checked}
  aria-disabled={disabled}
  tabindex="0"
  on:click={handleToggle}
  on:keydown={(event) => event.key === 'Enter' && handleToggle()}
>
  <div class="toggle-thumb" class:checked={checked}></div>
</div>

<style lang="css">
  @import './ToggleSwitch.css';
</style>