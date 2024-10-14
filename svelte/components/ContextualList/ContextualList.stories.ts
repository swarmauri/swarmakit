import ContextualList from './ContextualList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<ContextualList> = {
  title: 'component/Lists/ContextualList',
  component: ContextualList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    visible: { control: 'boolean' }
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
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' },
      { id: 3, label: 'Item 3' }
    ],
    visible: true
  }
};

export const ActionTriggered: Story = {
  args: {
    items: [
      { id: 1, label: 'Item 1', actionTriggered: true },
      { id: 2, label: 'Item 2' },
      { id: 3, label: 'Item 3' }
    ],
    visible: true
  }
};

export const Dismissed: Story = {
  args: {
    items: [
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' },
      { id: 3, label: 'Item 3' }
    ],
    visible: false
  }
};