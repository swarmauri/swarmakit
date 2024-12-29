import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'component/Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a default tooltip.',
  children: <button>Hover or Click me</button>,
};

export const Visible = Template.bind({});
Visible.args = {
  content: 'This tooltip is visible.',
  children: <button>Hover or Click me</button>,
  initiallyVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  content: 'This tooltip is hidden.',
  children: <button>Hover or Click me</button>,
  initiallyVisible: false,
};

export const Error = Template.bind({});
Error.args = {
  content: 'This is an error tooltip.',
  children: <button>Hover or Click me</button>,
  type: 'error',
};

export const Information = Template.bind({});
Information.args = {
  content: 'This is an information tooltip.',
  children: <button>Hover or Click me</button>,
  type: 'information',
};