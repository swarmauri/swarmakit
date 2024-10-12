<script lang="ts">
  export let steps: { label: string; status: 'active' | 'completed' | 'inactive' }[] = [];

  const getStepClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'step-active';
      case 'completed':
        return 'step-completed';
      case 'inactive':
        return 'step-inactive';
      default:
        return '';
    }
  };
</script>

<div class="loading-bars">
  {#each steps as { label, status }, index}
    <div class="step {getStepClass(status)}" role="progressbar" aria-valuenow={index + 1} aria-valuemin="0" aria-valuemax={steps.length}>
      <div class="bar"></div>
      <span class="label">{label}</span>
    </div>
  {/each}
</div>

<style lang="css">
  @import './LoadingBarsWithSteps.css';
</style>