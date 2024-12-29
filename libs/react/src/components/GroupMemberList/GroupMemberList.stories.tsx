import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupMemberList, { GroupMemberListProps } from './GroupMemberList';

export default {
  title: 'component/Chat/GroupMemberList',
  component: GroupMemberList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GroupMemberListProps> = (args) => <GroupMemberList {...args} />;

export const Default = Template.bind({});
Default.args = {
  members: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ],
  initiallyExpanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  initiallyExpanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
  initiallyExpanded: false,
};

export const Populated = Template.bind({});
Populated.args = {
  ...Default.args,
};

export const Empty = Template.bind({});
Empty.args = {
  members: [],
  initiallyExpanded: true,
};