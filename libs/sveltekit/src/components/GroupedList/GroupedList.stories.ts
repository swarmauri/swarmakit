import GroupedList from './GroupedList.svelte';
import type { ListState } from './GroupedList.svelte';

export default {
  title: 'Lists/GroupedList',
  component: GroupedList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ListState),
    },
    groups: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: GroupedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: ListState.GroupCollapsed,
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Tomato'] }
  ],
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  state: ListState.GroupExpanded,
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Tomato'] }
  ],
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  state: ListState.GroupCollapsed,
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Tomato'] }
  ],
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  state: ListState.ItemHover,
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Tomato'] }
  ],
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  state: ListState.ItemSelected,
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Tomato'] }
  ],
};