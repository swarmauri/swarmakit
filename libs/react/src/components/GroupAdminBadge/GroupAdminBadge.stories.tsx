import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupAdminBadge, { GroupAdminBadgeProps } from './GroupAdminBadge';

export default {
  title: 'component/Chat/GroupAdminBadge',
  component: GroupAdminBadge,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GroupAdminBadgeProps> = (args) => <GroupAdminBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  ...Default.args,
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};