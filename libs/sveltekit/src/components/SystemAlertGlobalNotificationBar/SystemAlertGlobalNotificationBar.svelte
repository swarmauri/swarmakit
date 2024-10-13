<script lang="ts">
  export let message: string = '';
  export let type: 'success' | 'error' | 'warning' | 'info' = 'info';

  const getAlertClass = (type: 'success' | 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      default:
        return '';
    }
  };
</script>

<div class={`alert ${getAlertClass(type)}`} role="alert" aria-live="assertive" aria-atomic="true">
  {message}
</div>

<style lang="css">
  .alert {
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
  }
  .alert-success {
    background-color: #d4edda;
    color: #155724;
  }
  .alert-error {
    background-color: #f8d7da;
    color: #721c24;
  }
  .alert-warning {
    background-color: #fff3cd;
    color: #856404;
  }
  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
  }
</style>