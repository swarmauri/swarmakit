<script lang="ts">
  export let message: string = '';
  export let type: 'success' | 'error' | 'warning' = 'success';
</script>

<div class={`validation-message ${type}`} role="alert">
  {message}
</div>

<style lang="css">
  @import './ValidationMessages.css';
</style>