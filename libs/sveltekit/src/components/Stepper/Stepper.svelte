<script lang="ts">
  export type StepState = 'completed' | 'active' | 'disabled';
  export let steps: { label: string; state: StepState }[] = [];
</script>

<div class="stepper" role="group" aria-label="Stepper">
  {#each steps as { label, state }, index}
    <div class={`step ${state}`} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && handleClick(index)}>
      <span class="step-label">{label}</span>
    </div>
  {/each}
</div>

<script lang="ts">
  function handleClick(index: number) {
    // Handle click event for step
  }
</script>

<style lang="css">
  @import './Stepper.css';
</style>