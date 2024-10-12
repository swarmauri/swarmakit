import TaskCompletionCheckList from './TaskCompletionCheckList.svelte';
import type { TaskState } from './TaskCompletionCheckList.svelte';

export default {
  title: 'Indicators/TaskCompletionCheckList',
  component: TaskCompletionCheckList,
  argTypes: {
    taskList: {
      control: 'object',
    },
  },
};

const Template = (args) => ({
  Component: TaskCompletionCheckList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  taskList: [
    { name: 'Task 1', state: TaskState.Unchecked },
    { name: 'Task 2', state: TaskState.PartiallyComplete },
    { name: 'Task 3', state: TaskState.Checked },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  taskList: [
    { name: 'Task 1', state: TaskState.Checked },
    { name: 'Task 2', state: TaskState.Checked },
    { name: 'Task 3', state: TaskState.Checked },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  taskList: [
    { name: 'Task 1', state: TaskState.Unchecked },
    { name: 'Task 2', state: TaskState.Unchecked },
    { name: 'Task 3', state: TaskState.Unchecked },
  ],
};

export const PartiallyComplete = Template.bind({});
PartiallyComplete.args = {
  taskList: [
    { name: 'Task 1', state: TaskState.PartiallyComplete },
    { name: 'Task 2', state: TaskState.PartiallyComplete },
    { name: 'Task 3', state: TaskState.PartiallyComplete },
  ],
};