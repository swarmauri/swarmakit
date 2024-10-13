<script lang="ts">
  export let tasks: { id: number; text: string; completed: boolean }[] = [];

  const toggleTaskCompletion = (taskId: number) => {
    tasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
  };

  const isPartiallyComplete = () =>
    tasks.some(task => task.completed) && tasks.some(task => !task.completed);
</script>

<ul class={isPartiallyComplete() ? 'partially-complete' : ''}>
  {#each tasks as task}
    <li>
      <input
        type="checkbox"
        bind:checked={task.completed}
        on:change={() => toggleTaskCompletion(task.id)}
        id={`task-${task.id}`}
        aria-checked={task.completed ? 'true' : 'false'}
      />
      <label for={`task-${task.id}`}>{task.text}</label>
    </li>
  {/each}
</ul>

<style lang="css">
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }

  .partially-complete {
    border-left: 4px solid orange;
    padding-left: 10px;
  }

  input[type='checkbox'] {
    margin-right: 10px;
  }
</style>