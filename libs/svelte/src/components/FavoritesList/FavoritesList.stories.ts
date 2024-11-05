import FavoritesList from './FavoritesList.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<FavoritesList> = {
  title: 'component/Lists/FavoritesList',
  component: FavoritesList,
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
    items: [
      { id: '1', label: 'Item 1', isFavorite: false },
      { id: '2', label: 'Item 2', isFavorite: true },
      { id: '3', label: 'Item 3', isFavorite: false }
    ]
  }
};

export const Starred: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', isFavorite: true },
      { id: '2', label: 'Item 2', isFavorite: true },
      { id: '3', label: 'Item 3', isFavorite: true }
    ]
  }
};

export const Unstarred: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', isFavorite: false },
      { id: '2', label: 'Item 2', isFavorite: false },
      { id: '3', label: 'Item 3', isFavorite: false }
    ]
  }
};

export const Hover: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', isFavorite: false },
      { id: '2', label: 'Item 2', isFavorite: true },
      { id: '3', label: 'Item 3', isFavorite: false }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByText('Item 1'));
  }
};

export const Selected: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1', isFavorite: false },
      { id: '2', label: 'Item 2', isFavorite: true },
      { id: '3', label: 'Item 3', isFavorite: false }
    ]
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Item 2'));
  }
};