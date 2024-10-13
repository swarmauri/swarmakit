<script lang="ts">
  export let progress: number = 0;
  export let status: 'active' | 'paused' = 'active';
</script>

<svg
  class="progress-circle"
  viewBox="0 0 36 36"
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Progress Circle"
>
  <path
    class="circle-bg"
    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
  />
  <path
    class="circle"
    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    style={`stroke-dasharray: ${progress}, 100`}
  />
</svg>

<style lang="css">
  .progress-circle {
    width: 100px;
    height: 100px;
  }

  .circle-bg {
    fill: none;
    stroke: #e0e0e0;
    stroke-width: 2.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    stroke: #76c7c0;
    transition: stroke-dasharray 0.3s ease;
  }

  .progress-circle[aria-valuenow='100'] .circle {
    stroke: #4caf50;
  }

  .progress-circle[data-status='paused'] .circle {
    stroke: #ff9800;
  }
</style>