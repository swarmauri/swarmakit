<script lang="ts">
  export let currentStep: number = 1;
  export let totalSteps: number = 5;
  export let disabled: boolean = false;

  const isStepCompleted = (step: number): boolean => step < currentStep;
  const isCurrentStep = (step: number): boolean => step === currentStep;

  const handleClick = (step: number) => {
    if (!disabled && step <= currentStep) {
      currentStep = step;
    }
  };

  const handleKeyPress = (event: KeyboardEvent, step: number) => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ') && step <= currentStep) {
      currentStep = step;
    }
  };
</script>

<div class="wizard-navigation" role="navigation">
  {#each Array(totalSteps).fill(0) as _, index}
    <div
      class={`step ${isStepCompleted(index + 1) ? 'completed' : ''} ${isCurrentStep(index + 1) ? 'current' : ''}`}
      role="button"
      tabindex={disabled ? undefined : 0}
      on:click={() => handleClick(index + 1)}
      on:keypress={(event) => handleKeyPress(event, index + 1)}
    >
      Step {index + 1}
    </div>
  {/each}
</div>

<style lang="css">
  @import './WizardNavigation.css';
</style>