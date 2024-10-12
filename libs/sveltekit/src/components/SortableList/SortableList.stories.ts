import SortableList from './SortableList.svelte';
import type { Item } from './SortableList.svelte';

export default {
  title: 'Lists/SortableList',
  component: SortableList,
  argTypes: {
    items: { control: 'object' },
    onSort: { action: 'onSort' },
  },
};

const Template = (args) => ({
  Component: SortableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
  ],
  onSort: (sortedItems: Item[]) => console.log('Sorted items', sortedItems),
};

export const Dragging = Template.bind({});
Dragging.args = {
  ...Default.args,
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: [
    { id: 3, content: 'Item 3' },
    { id: 1, content: 'Item 1' },
    { id: 4, content: 'Item 4' },
    { id: 2, content: 'Item 2' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, content: 'Item 1', disabled: true },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4', disabled: true },
  ],
};