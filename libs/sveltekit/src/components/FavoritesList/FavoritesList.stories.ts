import FavoritesList from './FavoritesList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/FavoritesList',
  component: FavoritesList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['starred', 'unstarred', 'hover', 'selected'],
    },
    items: {
      control: { type: 'array' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: FavoritesList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unstarred',
  items: [
    { id: 1, title: 'Item 1', isStarred: false },
    { id: 2, title: 'Item 2', isStarred: false },
    { id: 3, title: 'Item 3', isStarred: false },
  ],
};

export const Starred = Template.bind({});
Starred.args = {
  state: 'starred',
  items: [
    { id: 1, title: 'Item 1', isStarred: true },
    { id: 2, title: 'Item 2', isStarred: true },
    { id: 3, title: 'Item 3', isStarred: false },
  ],
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  state: 'unstarred',
  items: Default.args.items,
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
  items: Default.args.items,
};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected',
  items: Default.args.items,
};