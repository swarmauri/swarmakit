<script lang="ts">
  export let type: 'default' | 'notification' | 'status' = 'default';
  export let label: string = '';
</script>

<span class={`badge ${type}`} role="status" aria-live="polite">
  {label}
</span>

<style lang="css">
  @import './Badge.css';
</style>