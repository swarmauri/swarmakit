<script lang="ts">
  export type TaskState = 'checked' | 'unchecked' | 'partially-complete';
  export let tasks: { id: number; label: string; state: TaskState }[] = [];
  
  function handleCheckboxChange(taskId: number) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.state = task.state === 'checked' ? 'unchecked' : 'checked';
    }
  }
</script>

<ul class="task-list">
  {#each tasks as task (task.id)}
    <li class="task-item">
      <input
        type="checkbox"
        id={`task-${task.id}`}
        bind:checked={task.state === 'checked'}
        on:change={() => handleCheckboxChange(task.id)}
        aria-checked={task.state === 'checked' ? 'true' : 'false'}
        role="checkbox"
      />
      <label for={`task-${task.id}`}>{task.label}</label>
    </li>
  {/each}
</ul>

<style lang="css">
  @import './TaskCompletionCheckList.css';
</style>