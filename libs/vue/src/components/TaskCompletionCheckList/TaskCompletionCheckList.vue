<template>
  <ul class="checklist" role="list">
    <li 
      v-for="task in tasks" 
      :key="task.id" 
      :class="task.status" 
      role="listitem"
      aria-checked="getAriaChecked(task.status)"
    >
      <input 
        type="checkbox" 
        :checked="task.status === 'checked'"
        :indeterminate="task.status === 'partially-complete'"
        @change="toggleTaskStatus(task.id)"
        aria-label="Toggle task status"
      />
      <span>{{ task.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Task {
  id: number;
  name: string;
  status: 'checked' | 'unchecked' | 'partially-complete';
}

export default defineComponent({
  name: 'TaskCompletionCheckList',
  props: {
    tasks: {
      type: Array as () => Task[],
      required: true,
    },
  },
  setup(props) {
    const toggleTaskStatus = (taskId: number) => {
      const task = props.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'checked' ? 'unchecked' : 'checked';
      }
    };

    const getAriaChecked = (status: string) => {
      return status === 'checked' ? 'true' : status === 'unchecked' ? 'false' : 'mixed';
    };

    return { toggleTaskStatus, getAriaChecked };
  },
});
</script>

<style lang="css">
@import './TaskCompletionCheckList.css';
</style>