<script lang="ts">
  export let progress: number = 0;
  export let isDisabled: boolean = false;

  $: progressWidth = `${Math.min(Math.max(progress, 0), 100)}%`;
</script>

<div
  class="progress-bar-container"
  aria-valuenow={progress}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-disabled={isDisabled}
>
  <div class="progress-bar" style="width: {progressWidth}"></div>
</div>

<style lang="css">
  @import './ProgressBar.css';
</style>