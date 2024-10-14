// GroupMemberList.stories.js
import React from 'react';
import GroupMemberList from './GroupMemberList';

export default {
  title: 'Chat/GroupMemberList',
  component: GroupMemberList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <GroupMemberList {...args} />;

export const Default = Template.bind({});
Default.args = {
  members: ['Alice', 'Bob', 'Charlie'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  members: ['Alice', 'Bob', 'Charlie'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  members: ['Alice', 'Bob', 'Charlie'],
};

export const Populated = Template.bind({});
Populated.args = {
  members: ['Alice', 'Bob', 'Charlie'],
};

export const Empty = Template.bind({});
Empty.args = {
  members: [],
};