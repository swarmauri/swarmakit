<script lang="ts">
  export let label: string = "Checkbox";
  export let checked: boolean = false;
  export let disabled: boolean = false;

  function toggleCheck() {
    if (!disabled) {
      checked = !checked;
    }
  }
</script>

<div class="checkbox">
  <input
    type="checkbox"
    id="checkbox"
    bind:checked
    disabled={disabled}
    aria-disabled={disabled}
    aria-checked={checked}
  />
  <label for="checkbox" on:click={toggleCheck} class:disabled>{label}</label>
</div>

<style lang="css">
  .checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }

  label {
    font-size: 16px;
    cursor: pointer;
  }

  label.disabled {
    color: #aaa;
    cursor: not-allowed;
  }
</style>