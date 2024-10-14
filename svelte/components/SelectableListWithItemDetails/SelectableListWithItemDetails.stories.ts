import SelectableListWithItemDetails from './SelectableListWithItemDetails.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<SelectableListWithItemDetails> = {
  title: 'component/Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    selectedItemId: { control: 'number' },
    detailsOpen: { control: 'boolean' }
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
    items: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      text: `Item ${i + 1}`,
      details: `Details for Item ${i + 1}`
    })),
    selectedItemId: null,
    detailsOpen: false
  }
};

export const ItemSelected: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      text: `Item ${i + 1}`,
      details: `Details for Item ${i + 1}`
    })),
    selectedItemId: 1,
    detailsOpen: false
  }
};

export const ItemDeselected: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      text: `Item ${i + 1}`,
      details: `Details for Item ${i + 1}`
    })),
    selectedItemId: null,
    detailsOpen: false
  }
};

export const DetailsOpened: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      text: `Item ${i + 1}`,
      details: `Details for Item ${i + 1}`
    })),
    selectedItemId: 1,
    detailsOpen: true
  }
};

export const DetailsClosed: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      text: `Item ${i + 1}`,
      details: `Details for Item ${i + 1}`
    })),
    selectedItemId: 1,
    detailsOpen: false
  }
};