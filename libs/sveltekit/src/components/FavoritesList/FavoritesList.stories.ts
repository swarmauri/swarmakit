import FavoritesList from './FavoritesList.svelte';
import type { ListState } from './FavoritesList.svelte';

export default {
  title: 'Lists/FavoritesList',
  component: FavoritesList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: FavoritesList,
  props: args,
});

export const Starred = Template.bind({});
Starred.args = {
  state: ListState.Starred,
  items: [
    { title: 'Item 1', starred: true },
    { title: 'Item 2', starred: false },
  ],
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  state: ListState.Unstarred,
  items: [
    { title: 'Item 1', starred: false },
    { title: 'Item 2', starred: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: ListState.Hover,
  items: [
    { title: 'Item 1', starred: false },
    { title: 'Item 2', starred: false },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  state: ListState.Selected,
  items: [
    { title: 'Item 1', starred: false },
    { title: 'Item 2', starred: false },
  ],
};