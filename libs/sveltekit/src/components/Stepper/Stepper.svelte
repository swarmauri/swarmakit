<script lang="ts">
  export let steps: { label: string; state: 'completed' | 'active' | 'disabled' }[] = [];

  const getStepClass = (state: 'completed' | 'active' | 'disabled') => {
    switch (state) {
      case 'completed':
        return 'completed';
      case 'active':
        return 'active';
      case 'disabled':
        return 'disabled';
      default:
        return '';
    }
  };
</script>

<div class="stepper" role="progressbar" aria-valuemin="0" aria-valuemax={steps.length} aria-valuenow={steps.filter(step => step.state === 'completed').length}>
  {#each steps as { label, state }, index}
    <div class={`step ${getStepClass(state)}`} aria-current={state === 'active' ? 'step' : undefined}>
      <span class="step-label">{label}</span>
      {index < steps.length - 1 && <div class="step-separator"></div>}
    </div>
  {/each}
</div>

<style lang="css">
  .stepper {
    display: flex;
    align-items: center;
  }
  .step {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .step-label {
    margin-right: 5px;
  }
  .step-separator {
    width: 20px;
    height: 2px;
    background-color: #ccc;
    margin-left: 5px;
  }
  .completed .step-label {
    color: green;
  }
  .active .step-label {
    color: blue;
  }
  .disabled .step-label {
    color: gray;
  }
</style>