<script lang="ts">
  export let message: string = '';
  export let type: 'success' | 'error' | 'warning' = 'success';
</script>

<div class="validation-message" class:type>
  <span role="alert">{message}</span>
</div>

<style lang="css">
  .validation-message {
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
  }

  .success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
  }
</style>