import NumberedList from './NumberedList.svelte';
import type { ListItem } from './NumberedList.svelte';

export default {
  title: 'Lists/NumberedList',
  component: NumberedList,
  argTypes: {
    items: { control: 'object' },
    onItemClick: { action: 'onItemClick' },
  },
};

const Template = (args) => ({
  Component: NumberedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, content: 'Item 1', selected: false },
    { id: 2, content: 'Item 2', selected: false },
    { id: 3, content: 'Item 3', selected: false },
  ],
  onItemClick: (id: number) => console.log(`Item ${id} clicked`),
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { id: 1, content: 'Item 1', selected: true },
    { id: 2, content: 'Item 2', selected: false },
    { id: 3, content: 'Item 3', selected: false },
  ],
  onItemClick: (id: number) => console.log(`Item ${id} clicked`),
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, content: 'Item 1', selected: false },
    { id: 2, content: 'Item 2', selected: false },
    { id: 3, content: 'Item 3', selected: false },
  ],
  onItemClick: (id: number) => console.log(`Item ${id} clicked`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, content: 'Item 1', selected: false, disabled: true },
    { id: 2, content: 'Item 2', selected: false },
    { id: 3, content: 'Item 3', selected: false },
  ],
  onItemClick: (id: number) => console.log(`Item ${id} clicked`),
};