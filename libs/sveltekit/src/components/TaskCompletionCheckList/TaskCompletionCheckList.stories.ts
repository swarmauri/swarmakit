import TaskCompletionCheckList from './TaskCompletionCheckList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<TaskCompletionCheckList> = {
  title: 'component/Indicators/TaskCompletionCheckList',
  component: TaskCompletionCheckList,
  tags: ['autodocs'],
  argTypes: {
    tasks: { control: 'object' }
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      { id: 1, label: 'Task 1', completed: false },
      { id: 2, label: 'Task 2', completed: false },
      { id: 3, label: 'Task 3', completed: false }
    ]
  }
};

export const Checked: Story = {
  args: {
    tasks: [
      { id: 1, label: 'Task 1', completed: true },
      { id: 2, label: 'Task 2', completed: true },
      { id: 3, label: 'Task 3', completed: true }
    ]
  }
};

export const Unchecked: Story = {
  args: {
    tasks: [
      { id: 1, label: 'Task 1', completed: false },
      { id: 2, label: 'Task 2', completed: false },
      { id: 3, label: 'Task 3', completed: false }
    ]
  }
};

export const PartiallyComplete: Story = {
  args: {
    tasks: [
      { id: 1, label: 'Task 1', completed: true },
      { id: 2, label: 'Task 2', completed: false },
      { id: 3, label: 'Task 3', completed: true }
    ]
  }
};