import ExpandableList from './ExpandableList.svelte';
import type { ListState } from './ExpandableList.svelte';

export default {
  title: 'Lists/ExpandableList',
  component: ExpandableList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: ExpandableList,
  props: args,
});

export const ItemExpanded = Template.bind({});
ItemExpanded.args = {
  state: ListState.ItemExpanded,
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
  ],
};

export const ItemCollapsed = Template.bind({});
ItemCollapsed.args = {
  state: ListState.ItemCollapsed,
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: ListState.Hover,
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  state: ListState.Selected,
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
  ],
};