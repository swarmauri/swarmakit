<script lang="ts">
  export let message: string = '';
  export let type: 'success' | 'error' | 'warning' = 'success';
</script>

<div class="validation-message" class={type}>
  <span>{message}</span>
</div>

<style lang="css">
  @import './ValidationMessages.css';
</style>