<script lang="ts">
  export let progress: number = 0;
  export let status: 'complete' | 'incomplete' | 'paused' | 'active' = 'incomplete';

  $: progressNormalized = Math.min(Math.max(progress, 0), 100);
  $: circleRadius = 50;
  $: circumference = 2 * Math.PI * circleRadius;
  $: progressOffset = circumference - (progressNormalized / 100) * circumference;
</script>

<svg
  class="progress-circle"
  width="120"
  height="120"
  viewBox="0 0 120 120"
  aria-valuenow={progress}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Progress Circle"
>
  <circle
    class="progress-circle-bg"
    cx="60"
    cy="60"
    r={circleRadius}
  />
  <circle
    class="progress-circle-fg"
    cx="60"
    cy="60"
    r={circleRadius}
    stroke-dasharray={circumference}
    stroke-dashoffset={progressOffset}
    class={status}
  />
</svg>

<style lang="css">
  @import './ProgressCircle.css';
</style>