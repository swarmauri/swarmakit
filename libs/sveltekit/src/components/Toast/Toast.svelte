<script lang="ts">
  export type ToastType = 'success' | 'error' | 'warning' | 'info';
  export let type: ToastType = 'info';
  export let message: string = '';
  export let isVisible: boolean = true;

  function dismissToast() {
    isVisible = false;
  }
</script>

{#if isVisible}
  <div class={`toast toast-${type}`} role="alert">
    <span>{message}</span>
    <button on:click={dismissToast} aria-label="Dismiss Toast">✕</button>
  </div>
{/if}

<style lang="css">
  @import './Toast.css';
</style>