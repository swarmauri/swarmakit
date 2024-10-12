<script lang="ts">
  export type ToastState = 'visible' | 'hidden' | 'dismissed' | 'autoHide';
  export let state: ToastState = 'hidden';
  export let message: string = '';
  export let autoHideDuration: number = 3000;
  let isVisible = state === 'visible';

  const handleDismiss = () => {
    isVisible = false;
  };

  if (state === 'autoHide') {
    setTimeout(() => {
      isVisible = false;
    }, autoHideDuration);
  }
</script>

{#if isVisible}
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div>{message}</div>
    <button on:click={handleDismiss} aria-label="Dismiss">Dismiss</button>
  </div>
{/if}

<style lang="css">
  @import './Toast.css';
</style>