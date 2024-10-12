import GroupedList from './GroupedList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/GroupedList',
  component: GroupedList,
  tags: ['autodocs'],
  argTypes: {
    groups: {
      control: { type: 'array' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: GroupedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  groups: [
    { id: 1, title: 'Fruits', items: [{ id: 1, title: 'Apple' }, { id: 2, title: 'Banana' }] },
    { id: 2, title: 'Vegetables', items: [{ id: 3, title: 'Carrot' }, { id: 4, title: 'Lettuce' }] },
  ],
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  groups: Default.args.groups,
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  groups: Default.args.groups,
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  groups: Default.args.groups,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  groups: Default.args.groups,
};