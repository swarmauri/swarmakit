<script lang="ts">
  export enum TaskState {
    Checked = 'checked',
    Unchecked = 'unchecked',
    PartiallyComplete = 'partially-complete'
  }

  export let taskList: { name: string, state: TaskState }[] = [];
</script>

<ul>
  {#each taskList as { name, state }}
    <li class={`task-item ${state}`} role="checkbox" aria-checked={state === TaskState.Checked}>
      <input type="checkbox" bind:group={state} disabled={state === TaskState.PartiallyComplete} />
      <span>{name}</span>
    </li>
  {/each}
</ul>

<style lang="css">
  @import './TaskCompletionCheckList.css';
</style>