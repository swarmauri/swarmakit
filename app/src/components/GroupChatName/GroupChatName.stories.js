// GroupChatName.stories.js
import React from 'react';
import GroupChatName from './GroupChatName';

export default {
  title: 'Chat/GroupChatName',
  component: GroupChatName,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <GroupChatName {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Group Chat',
  isVisible: true,
  isEdited: false,
};

export const Displayed = Template.bind({});
Displayed.args = {
  name: 'Group Chat',
  isVisible: true,
  isEdited: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  name: 'Group Chat',
  isVisible: false,
  isEdited: false,
};

export const Edited = Template.bind({});
Edited.args = {
  name: 'Edited Group Chat',
  isVisible: true,
  isEdited: true,
};