import React from 'react';
import { Meta, Story } from '@storybook/react';
import Popover, { PopoverProps } from './Popover';

export default {
  title: 'component/Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PopoverProps> = (args) => <Popover {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is the popover content.',
  children: <button>Toggle Popover</button>,
};

export const Visible = Template.bind({});
Visible.args = {
  content: 'This is the popover content.',
  children: <button>Toggle Popover</button>,
  initiallyVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  content: 'This is the popover content.',
  children: <button>Toggle Popover</button>,
  initiallyVisible: false,
};