import FilterableList from './FilterableList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<FilterableList> = {
  title: 'component/Lists/FilterableList',
  component: FilterableList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' }
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
    items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  }
};

export const FilterApplied: Story = {
  args: {
    items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Filter items...');
    await userEvent.type(input, 'Ba');
  }
};

export const NoResults: Story = {
  args: {
    items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Filter items...');
    await userEvent.type(input, 'Zucchini');
  }
};

export const ClearFilter: Story = {
  args: {
    items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Filter items...');
    await userEvent.type(input, 'Ch');
    const clearButton = canvas.getByRole('button', { name: 'Clear filter' });
    await userEvent.click(clearButton);
  }
};