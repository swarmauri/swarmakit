import React from 'react';
import { Meta, Story } from '@storybook/react';
import FloatingActionButton, { FloatingActionButtonProps } from './FloatingActionButton';

export default {
  title: 'component/Miscellaneous/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FloatingActionButtonProps> = (args) => <FloatingActionButton {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  onClick: () => alert('Button clicked'),
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Collapsed.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Collapsed.args,
};