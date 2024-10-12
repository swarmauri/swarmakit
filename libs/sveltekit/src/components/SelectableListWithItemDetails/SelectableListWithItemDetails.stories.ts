import SelectableListWithItemDetails from './SelectableListWithItemDetails.svelte';
import type { Item } from './SelectableListWithItemDetails.svelte';

export default {
  title: 'Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  argTypes: {
    items: { control: 'object' },
    onItemSelect: { action: 'onItemSelect' },
    onToggleDetails: { action: 'onToggleDetails' },
  },
};

const Template = (args) => ({
  Component: SelectableListWithItemDetails,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: 'Item 1', details: 'Details of Item 1', selected: false },
    { id: 2, title: 'Item 2', details: 'Details of Item 2', selected: false },
    { id: 3, title: 'Item 3', details: 'Details of Item 3', selected: false },
  ],
  onItemSelect: (id: number) => console.log(`Selected item ${id}`),
  onToggleDetails: (id: number) => console.log(`Toggled details for item ${id}`),
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
  items: Default.args.items.map((item, index) => ({
    ...item,
    selected: index === 0,
  })),
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  ...Default.args,
  items: Default.args.items.map((item) => ({
    ...item,
    selected: false,
  })),
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  ...Default.args,
  items: Default.args.items.map((item, index) => ({
    ...item,
    selected: index === 1,
  })),
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  ...Default.args,
  items: Default.args.items.map((item) => ({
    ...item,
    selected: false,
  })),
};