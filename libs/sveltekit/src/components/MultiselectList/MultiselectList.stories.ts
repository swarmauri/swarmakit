import MultiselectList from './MultiselectList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<MultiselectList> = {
  title: 'component/Lists/MultiselectList',
  component: MultiselectList,
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
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false }
    ],
    disabled: false
  }
};

export const ItemSelected: Story = {
  args: {
    items: [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false }
    ],
    disabled: false
  }
};

export const ItemDeselected: Story = {
  args: {
    items: [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: true },
      { id: '3', label: 'Option 3', selected: false }
    ],
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    items: [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false }
    ],
    disabled: true
  }
};

export const Hover: Story = {
  args: {
    items: [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false }
    ],
    disabled: false
  }
};