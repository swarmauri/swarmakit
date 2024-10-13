<script lang="ts">
  export let type: 'loading' | 'success' | 'error' = 'loading';
</script>

<div class="activity-indicator" class:type>
  {#if type === 'loading'}
    <span class="spinner" aria-label="Loading"></span>
  {:else if type === 'success'}
    <span class="success-icon" aria-label="Success">✔</span>
  {:else if type === 'error'}
    <span class="error-icon" aria-label="Error">✖</span>
  {/if}
</div>

<style lang="css">
  .activity-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .success-icon {
    color: #28a745;
    font-size: 24px;
  }

  .error-icon {
    color: #dc3545;
    font-size: 24px;
  }
</style>