import MultiselectList from './MultiselectList.svelte';
import type { Item } from './MultiselectList.svelte';

export default {
  title: 'Lists/MultiselectList',
  component: MultiselectList,
  argTypes: {
    items: { control: 'object' },
    onSelect: { action: 'onSelect' },
  },
};

const Template = (args) => ({
  Component: MultiselectList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ],
  onSelect: (id: number) => console.log(`Item ${id} selected`),
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: [
    { id: 1, name: 'Item 1', selected: true },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ],
  onSelect: (id: number) => console.log(`Item ${id} selected`),
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ],
  onSelect: (id: number) => console.log(`Item ${id} deselected`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, name: 'Item 1', selected: false, disabled: true },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ],
  onSelect: (id: number) => console.log(`Item ${id} selected`),
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ],
  onSelect: (id: number) => console.log(`Item ${id} selected`),
};