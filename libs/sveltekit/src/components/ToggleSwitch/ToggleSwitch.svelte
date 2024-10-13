<script lang="ts">
  export let checked: boolean = false;
  export let disabled: boolean = false;

  function toggle() {
    if (!disabled) {
      checked = !checked;
    }
  }
</script>

<div class="toggle-switch" on:click={toggle} role="switch" aria-checked={checked} aria-disabled={disabled}>
  <div class="toggle-thumb" style="transform: translateX({checked ? '24px' : '0'})"></div>
</div>

<style lang="css">
  .toggle-switch {
    width: 50px;
    height: 24px;
    background-color: #ccc;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
  }

  .toggle-thumb {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
    transition: transform 0.2s;
  }

  .toggle-switch[aria-checked="true"] {
    background-color: #4caf50;
  }

  .toggle-switch[aria-disabled="true"] {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
</style>