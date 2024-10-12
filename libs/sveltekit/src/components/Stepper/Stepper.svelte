<script lang="ts">
  export enum StepState {
    Completed = 'completed',
    Active = 'active',
    Disabled = 'disabled'
  }

  export let state: StepState = StepState.Disabled;
  export let steps: string[] = [];
  export let currentStepIndex: number = 0;
</script>

<div class="stepper">
  {#each steps as step, index}
    <div
      class={`step ${getStepClass(index)}`}
      aria-label={`Step ${index + 1}: ${step}`}
    >
      <span class="step-number">{index + 1}</span>
      <span class="step-label">{step}</span>
    </div>
  {/each}
</div>

<script lang="ts">
  function getStepClass(index: number): string {
    if (index < currentStepIndex) return StepState.Completed;
    if (index === currentStepIndex) return state;
    return StepState.Disabled;
  }
</script>

<style lang="css">
  @import './Stepper.css';
</style>