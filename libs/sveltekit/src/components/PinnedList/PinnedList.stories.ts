import PinnedList from './PinnedList.svelte';
import type { Item } from './PinnedList.svelte';

export default {
  title: 'Lists/PinnedList',
  component: PinnedList,
  argTypes: {
    items: { control: 'object' },
    onPinToggle: { action: 'onPinToggle' },
    onSelect: { action: 'onSelect' },
  },
};

const Template = (args) => ({
  Component: PinnedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'Item 1', pinned: false, selected: false },
    { id: 2, text: 'Item 2', pinned: false, selected: false },
    { id: 3, text: 'Item 3', pinned: true, selected: false },
  ],
  onPinToggle: (id: number) => console.log(`Toggled pin for item ${id}`),
  onSelect: (id: number) => console.log(`Selected item ${id}`),
};

export const Pinned = Template.bind({});
Pinned.args = {
  items: [
    { id: 1, text: 'Item 1', pinned: true, selected: false },
    { id: 2, text: 'Item 2', pinned: false, selected: false },
    { id: 3, text: 'Item 3', pinned: true, selected: false },
  ],
  onPinToggle: (id: number) => console.log(`Toggled pin for item ${id}`),
  onSelect: (id: number) => console.log(`Selected item ${id}`),
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  items: [
    { id: 1, text: 'Item 1', pinned: false, selected: false },
    { id: 2, text: 'Item 2', pinned: false, selected: false },
    { id: 3, text: 'Item 3', pinned: false, selected: false },
  ],
  onPinToggle: (id: number) => console.log(`Toggled pin for item ${id}`),
  onSelect: (id: number) => console.log(`Selected item ${id}`),
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, text: 'Item 1', pinned: false, selected: false },
    { id: 2, text: 'Item 2', pinned: false, selected: false },
    { id: 3, text: 'Item 3', pinned: false, selected: false },
  ],
  onPinToggle: (id: number) => console.log(`Toggled pin for item ${id}`),
  onSelect: (id: number) => console.log(`Selected item ${id}`),
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { id: 1, text: 'Item 1', pinned: false, selected: true },
    { id: 2, text: 'Item 2', pinned: false, selected: false },
    { id: 3, text: 'Item 3', pinned: false, selected: false },
  ],
  onPinToggle: (id: number) => console.log(`Toggled pin for item ${id}`),
  onSelect: (id: number) => console.log(`Selected item ${id}`),
};