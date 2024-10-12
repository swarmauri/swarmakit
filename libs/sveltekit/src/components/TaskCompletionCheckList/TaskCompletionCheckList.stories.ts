import TaskCompletionCheckList from './TaskCompletionCheckList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/TaskCompletionCheckList',
  component: TaskCompletionCheckList,
  tags: ['autodocs'],
  argTypes: {
    tasks: {
      control: { type: 'object' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: TaskCompletionCheckList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: 1, label: 'Task 1', state: 'unchecked' },
    { id: 2, label: 'Task 2', state: 'unchecked' },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  tasks: [
    { id: 1, label: 'Task 1', state: 'checked' },
    { id: 2, label: 'Task 2', state: 'checked' },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  tasks: [
    { id: 1, label: 'Task 1', state: 'unchecked' },
    { id: 2, label: 'Task 2', state: 'unchecked' },
  ],
};

export const PartiallyComplete = Template.bind({});
PartiallyComplete.args = {
  tasks: [
    { id: 1, label: 'Task 1', state: 'checked' },
    { id: 2, label: 'Task 2', state: 'unchecked' },
  ],
};