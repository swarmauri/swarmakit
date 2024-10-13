<script lang="ts">
  export let status: 'online' | 'offline' | 'busy' | 'idle' = 'offline';

  const getColor = () => {
    switch (status) {
      case 'online':
        return 'green';
      case 'offline':
        return 'gray';
      case 'busy':
        return 'red';
      case 'idle':
        return 'yellow';
      default:
        return 'gray';
    }
  };
</script>

<div 
  class="status-dot" 
  style="background-color: {getColor()}" 
  aria-label={`Status: ${status}`}
></div>

<style lang="css">
  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.2s;
  }
</style>