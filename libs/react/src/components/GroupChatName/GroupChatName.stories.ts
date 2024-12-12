import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupChatName, { GroupChatNameProps } from './GroupChatName';

export default {
  title: 'component/Chat/GroupChatName',
  component: GroupChatName,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GroupChatNameProps> = (args) => <GroupChatName {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Group Chat',
  isVisible: true,
  isEdited: false,
};

export const Displayed = Template.bind({});
Displayed.args = {
  ...Default.args,
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};

export const Edited = Template.bind({});
Edited.args = {
  ...Default.args,
  isEdited: true,
};