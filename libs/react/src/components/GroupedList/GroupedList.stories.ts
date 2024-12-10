import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupedList, { GroupedListProps } from './GroupedList';

export default {
  title: 'component/Lists/GroupedList',
  component: GroupedList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GroupedListProps> = (args) => <GroupedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  groups: [
    {
      id: 1,
      name: 'Group 1',
      items: [
        { id: 1, name: 'Item 1.1' },
        { id: 2, name: 'Item 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Group 2',
      items: [
        { id: 3, name: 'Item 2.1' },
        { id: 4, name: 'Item 2.2' },
      ],
    },
  ],
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  ...Default.args,
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  ...Default.args,
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  ...Default.args,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};