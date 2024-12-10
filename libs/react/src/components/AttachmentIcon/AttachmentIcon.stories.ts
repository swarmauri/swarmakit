import React from 'react';
import { Meta, Story } from '@storybook/react';
import AttachmentIcon, { AttachmentIconProps } from './AttachmentIcon';

export default {
  title: 'component/Chat/AttachmentIcon',
  component: AttachmentIcon,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AttachmentIconProps> = (args) => <AttachmentIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  disabled: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  disabled: false,
  onClick: () => console.log('Icon clicked'),
};