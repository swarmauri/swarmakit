import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconButton from './IconButton';
import { FaStar } from 'react-icons/fa';

export default {
  title: 'component/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaStar />,
  onClick: () => alert('Icon Button clicked'),
  ariaLabel: 'default icon button',
};

export const Active = Template.bind({});
Active.args = {
  icon: <FaStar />,
  onClick: () => alert('Active Icon Button clicked'),
  ariaLabel: 'active icon button',
};

export const Hover = Template.bind({});
Hover.args = {
  icon: <FaStar />,
  onClick: () => alert('Hover Icon Button clicked'),
  ariaLabel: 'hover icon button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <FaStar />,
  onClick: () => alert('Disabled Icon Button clicked'),
  disabled: true,
  ariaLabel: 'disabled icon button',
};