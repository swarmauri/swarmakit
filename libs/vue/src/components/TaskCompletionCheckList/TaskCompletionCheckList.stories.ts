import TaskCompletionCheckList from './TaskCompletionCheckList.vue';

export default {
  title: 'Indicators/TaskCompletionCheckList',
  component: TaskCompletionCheckList,
  tags: ['autodocs'],
  argTypes: {
    tasks: {
      control: { type: 'object' },
      description: 'List of tasks with their completion status',
    },
  },
};

const Template = (args: any) => ({
  components: { TaskCompletionCheckList },
  setup() {
    return { args };
  },
  template: '<TaskCompletionCheckList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: 1, name: 'Task 1', status: 'unchecked' },
    { id: 2, name: 'Task 2', status: 'checked' },
    { id: 3, name: 'Task 3', status: 'partially-complete' },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  tasks: [
    { id: 1, name: 'Task 1', status: 'checked' },
    { id: 2, name: 'Task 2', status: 'checked' },
    { id: 3, name: 'Task 3', status: 'checked' },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  tasks: [
    { id: 1, name: 'Task 1', status: 'unchecked' },
    { id: 2, name: 'Task 2', status: 'unchecked' },
    { id: 3, name: 'Task 3', status: 'unchecked' },
  ],
};

export const PartiallyComplete = Template.bind({});
PartiallyComplete.args = {
  tasks: [
    { id: 1, name: 'Task 1', status: 'partially-complete' },
    { id: 2, name: 'Task 2', status: 'partially-complete' },
    { id: 3, name: 'Task 3', status: 'partially-complete' },
  ],
};