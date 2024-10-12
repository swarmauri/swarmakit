<script lang="ts">
  export let progress: number = 0;
  export let status: 'active' | 'paused' | 'complete' | 'incomplete' = 'incomplete';

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }

  function handleClick() {
    // Handle progress circle click logic
  }

  $: progressCircleClass = `progress-circle ${status}`;
</script>

<div
  class={progressCircleClass}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={progress}
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeyDown}>
  <svg viewBox="0 0 36 36">
    <path
      class="circle-bg"
      d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path
      class="circle"
      stroke-dasharray="{progress}, 100"
      d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
    />
  </svg>
  <span class="progress-text">{progress}%</span>
</div>

<style lang="css">
  @import './ProgressCircle.css';
</style>