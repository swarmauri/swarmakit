<script lang="ts">
  export let steps: { label: string; active: boolean; completed: boolean }[] = [];
</script>

<div class="loading-bars-with-steps" role="progressbar" aria-valuemin="0" aria-valuemax={steps.length} aria-valuenow={steps.filter(step => step.completed).length}>
  {#each steps as { label, active, completed }, index}
    <div class="step" role="listitem" aria-current={active ? 'step' : undefined} aria-label={label}>
      <div class="bar {completed ? 'completed' : active ? 'active' : 'inactive'}"></div>
      <span>{label}</span>
    </div>
  {/each}
</div>

<style lang="css">
  @import './LoadingBarsWithSteps.css';
</style>