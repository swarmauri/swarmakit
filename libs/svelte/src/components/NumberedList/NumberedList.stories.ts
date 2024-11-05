import NumberedList from './NumberedList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<NumberedList> = {
  title: 'component/Lists/NumberedList',
  component: NumberedList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    disabled: { control: 'boolean' }
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
      { id: '1', label: 'Item 1', selected: false },
      { id: '2', label: 'Item 2', selected: false },
      { id: '3', label: 'Item 3', selected: false }
    ],
    disabled: false
  }
};

export const Selected: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', selected: true },
      { id: '2', label: 'Item 2', selected: false },
      { id: '3', label: 'Item 3', selected: false }
    ],
    disabled: false
  }
};

export const Hover: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', selected: false },
      { id: '2', label: 'Item 2', selected: false },
      { id: '3', label: 'Item 3', selected: false }
    ],
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', selected: false },
      { id: '2', label: 'Item 2', selected: false },
      { id: '3', label: 'Item 3', selected: false }
    ],
    disabled: true
  }
};