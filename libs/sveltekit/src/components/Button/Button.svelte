<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let variant: 'primary' | 'secondary' = 'primary';
</script>

<button type={type} disabled={disabled} class={`button ${variant}`} aria-disabled={disabled ? 'true' : 'false'}>
  <slot></slot>
</button>

<style lang="css">
  @import './Button.css';
</style>