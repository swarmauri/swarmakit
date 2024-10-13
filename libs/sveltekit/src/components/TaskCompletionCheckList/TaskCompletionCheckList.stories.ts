import TaskCompletionCheckList from './TaskCompletionCheckList.svelte';

export default {
  title: 'Indicators/TaskCompletionCheckList',
  component: TaskCompletionCheckList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    tasks: [
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: false },
      { id: 3, text: 'Task 3', completed: false },
    ],
  },
};

export const Checked = {
  args: {
    tasks: [
      { id: 1, text: 'Task 1', completed: true },
      { id: 2, text: 'Task 2', completed: true },
      { id: 3, text: 'Task 3', completed: true },
    ],
  },
};

export const Unchecked = {
  args: {
    tasks: [
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: false },
      { id: 3, text: 'Task 3', completed: false },
    ],
  },
};

export const PartiallyComplete = {
  args: {
    tasks: [
      { id: 1, text: 'Task 1', completed: true },
      { id: 2, text: 'Task 2', completed: false },
      { id: 3, text: 'Task 3', completed: false },
    ],
  },
};