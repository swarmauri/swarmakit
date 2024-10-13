<script lang="ts">
  export let active: boolean = true;
</script>

<div class="loading-spinner" aria-hidden={!active} aria-label="Loading" role="status">
  {#if active}
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  {/if}
</div>

<style lang="css">
  .loading-spinner {
    display: inline-block;
    width: 50px;
    height: 50px;
  }

  .spinner {
    animation: rotate 2s linear infinite;
  }

  .path {
    stroke: #6200ea;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>