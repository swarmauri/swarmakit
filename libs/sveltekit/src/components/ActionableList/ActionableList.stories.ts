import ActionableList from './ActionableList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<ActionableList> = {
  title: 'component/Lists/ActionableList',
  component: ActionableList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    loading: { control: 'boolean' }
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
    items: [
      { id: 1, text: 'Item 1', action: () => alert('Action 1 triggered') },
      { id: 2, text: 'Item 2', action: () => alert('Action 2 triggered') },
      { id: 3, text: 'Item 3', action: () => alert('Action 3 triggered') }
    ],
    loading: false
  }
};

export const Hover: Story = {
  args: {
    items: [
      { id: 1, text: 'Item 1', action: () => alert('Action 1 triggered') },
      { id: 2, text: 'Item 2', action: () => alert('Action 2 triggered') },
      { id: 3, text: 'Item 3', action: () => alert('Action 3 triggered') }
    ],
    loading: false
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const ActionTriggered: Story = {
  args: {
    items: [
      { id: 1, text: 'Item 1', action: () => alert('Action 1 triggered') },
      { id: 2, text: 'Item 2', action: () => alert('Action 2 triggered') },
      { id: 3, text: 'Item 3', action: () => alert('Action 3 triggered') }
    ],
    loading: false
  }
};

export const Disabled: Story = {
  args: {
    items: [
      { id: 1, text: 'Item 1', action: () => alert('Action 1 triggered'), disabled: true },
      { id: 2, text: 'Item 2', action: () => alert('Action 2 triggered') },
      { id: 3, text: 'Item 3', action: () => alert('Action 3 triggered') }
    ],
    loading: false
  }
};

export const Loading: Story = {
  args: {
    items: [
      { id: 1, text: 'Item 1', action: () => alert('Action 1 triggered') },
      { id: 2, text: 'Item 2', action: () => alert('Action 2 triggered') },
      { id: 3, text: 'Item 3', action: () => alert('Action 3 triggered') }
    ],
    loading: true
  }
};