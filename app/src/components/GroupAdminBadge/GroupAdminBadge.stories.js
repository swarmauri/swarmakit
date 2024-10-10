// GroupAdminBadge.stories.js
import React from 'react';
import GroupAdminBadge from './GroupAdminBadge';

export default {
  title: 'Chat/GroupAdminBadge',
  component: GroupAdminBadge,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <GroupAdminBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};