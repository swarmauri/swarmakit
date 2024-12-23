
<template>
  <ul class="checklist">
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{
        checked: task.status === 'checked',
        unchecked: task.status === 'unchecked',
        partiallyComplete: task.status === 'partiallyComplete',
      }"
    >
      <input
        type="checkbox"
        :checked="task.status === 'checked'"
        :indeterminate="task.status === 'partiallyComplete'"
        :aria-checked="task.status === 'checked' ? 'true' : task.status === 'partiallyComplete' ? 'mixed' : 'false'"
        disabled
      />
      <span class="task-label">{{ task.label }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Task {
  label: string;
  status: 'checked' | 'unchecked' | 'partiallyComplete';
}

export default defineComponent({
  name: 'TaskCompletionCheckList',
  props: {
    tasks: {
      type: Array as () => Task[],
      required: true,
    },
  },
});
</script>




<style scoped lang="css">
@import './TaskCompletionCheckList.css';
</style>
