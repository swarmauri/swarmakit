<script lang="ts">
  export let icon: string;
  export let label: string;
  export let disabled: boolean = false;
</script>

<button disabled={disabled} class="icon-button" aria-label={label} aria-disabled={disabled ? 'true' : 'false'}>
  <i class={icon} aria-hidden="true"></i>
</button>

<style lang="css">
  @import './IconButton.css';
</style>