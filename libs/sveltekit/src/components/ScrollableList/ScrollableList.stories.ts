import ScrollableList from './ScrollableList.svelte';
import type { Item } from './ScrollableList.svelte';

export default {
  title: 'Lists/ScrollableList',
  component: ScrollableList,
  argTypes: {
    items: { control: 'object' },
    onItemSelect: { action: 'onItemSelect' },
    isDisabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ScrollableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'Item 1', disabled: false },
    { id: 2, text: 'Item 2', disabled: false },
    { id: 3, text: 'Item 3', disabled: false },
    { id: 4, text: 'Item 4', disabled: false },
    { id: 5, text: 'Item 5', disabled: false },
  ],
  onItemSelect: (id: number) => console.log(`Selected item ${id}`),
  isDisabled: false,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  items: [
    { id: 1, text: 'Item 1', disabled: false },
    { id: 2, text: 'Item 2', disabled: false },
    { id: 3, text: 'Item 3', disabled: false },
    { id: 4, text: 'Item 4', disabled: false },
    { id: 5, text: 'Item 5', disabled: false },
    { id: 6, text: 'Item 6', disabled: false },
    { id: 7, text: 'Item 7', disabled: false },
  ],
  onItemSelect: (id: number) => console.log(`Selected item ${id}`),
  isDisabled: false,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: [
    { id: 1, text: 'Item 1', disabled: false },
    { id: 2, text: 'Item 2', disabled: false },
    { id: 3, text: 'Item 3', disabled: false },
    { id: 4, text: 'Item 4', disabled: false },
    { id: 5, text: 'Item 5', disabled: false },
  ],
  onItemSelect: (id: number) => console.log(`Selected item ${id}`),
  isDisabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, text: 'Item 1', disabled: false },
    { id: 2, text: 'Item 2', disabled: false },
    { id: 3, text: 'Item 3', disabled: false },
  ],
  onItemSelect: (id: number) => console.log(`Selected item ${id}`),
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, text: 'Item 1', disabled: false },
    { id: 2, text: 'Item 2', disabled: false },
    { id: 3, text: 'Item 3', disabled: true },
  ],
  onItemSelect: (id: number) => console.log(`Selected item ${id}`),
  isDisabled: true,
};