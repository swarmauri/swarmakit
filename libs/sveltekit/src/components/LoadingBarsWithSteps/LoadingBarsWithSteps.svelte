<script lang="ts">
  export interface Step {
    id: number;
    label: string;
    status: 'active' | 'completed' | 'inactive';
  }

  export let steps: Step[] = [];
</script>

<div class="loading-bars" aria-label="Loading steps">
  {#each steps as { id, label, status }}
    <div class={`step ${status}`} aria-label={`Step ${id}: ${label}`}>
      <span class="step-label">{label}</span>
    </div>
  {/each}
</div>

<style lang="css">
  .loading-bars {
    display: flex;
    gap: 10px;
  }

  .step {
    flex: 1;
    height: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .step.active {
    background-color: #6200ea;
  }

  .step.completed {
    background-color: #03dac5;
  }

  .step.inactive {
    background-color: #e0e0e0;
  }

  .step-label {
    padding: 0 5px;
  }
</style>