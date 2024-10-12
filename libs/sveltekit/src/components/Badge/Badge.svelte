<script lang="ts">
  export let type: 'default' | 'notification' | 'status' = 'default';
  export let content: string = '';
</script>

<div class="badge" class={type} role="status" aria-live="polite">
  {content}
</div>

<style lang="css">
  @import './Badge.css';
</style>