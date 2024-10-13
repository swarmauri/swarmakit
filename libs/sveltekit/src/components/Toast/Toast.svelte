<script lang="ts">
  export let message: string = '';
  export let type: 'success' | 'error' | 'warning' | 'info' = 'info';
  export let visible: boolean = true;

  const getToastClass = () => {
    switch (type) {
      case 'success':
        return 'toast-success';
      case 'error':
        return 'toast-error';
      case 'warning':
        return 'toast-warning';
      case 'info':
      default:
        return 'toast-info';
    }
  };

  const dismiss = () => {
    visible = false;
  };
</script>

{#if visible}
  <div class={`toast ${getToastClass()}`} role="alert" aria-live="assertive">
    <span>{message}</span>
    <button on:click={dismiss} aria-label="Dismiss">✖</button>
  </div>
{/if}

<style lang="css">
  .toast {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 4px;
    max-width: 300px;
  }

  .toast-success {
    background-color: #d4edda;
    color: #155724;
  }

  .toast-error {
    background-color: #f8d7da;
    color: #721c24;
  }

  .toast-warning {
    background-color: #fff3cd;
    color: #856404;
  }

  .toast-info {
    background-color: #d1ecf1;
    color: #0c5460;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: inherit;
  }

  button:focus {
    outline: 2px solid currentColor;
  }
</style>