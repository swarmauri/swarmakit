<script lang="ts">
  export let checked: boolean = false;
  export let disabled: boolean = false;

  function toggle() {
    if (!disabled) {
      checked = !checked;
    }
  }
</script>

<div
  role="switch"
  aria-checked={checked}
  aria-disabled={disabled}
  class="toggle-switch"
  on:click={toggle}
  tabindex={disabled ? -1 : 0}
  on:keydown={(e) => !disabled && e.key === 'Enter' && toggle()}
>
  <div class="switch-thumb" class:checked={checked} class:disabled={disabled}></div>
</div>

<style lang="css">
  @import './ToggleSwitch.css';
</style>