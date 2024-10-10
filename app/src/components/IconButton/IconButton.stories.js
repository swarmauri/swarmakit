import React from 'react';
import IconButton from './IconButton';
import { FaCoffee } from 'react-icons/fa';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaCoffee />,
};

export const Active = Template.bind({});
Active.args = {
  icon: <FaCoffee />,
};

export const Hover = Template.bind({});
Hover.args = {
  icon: <FaCoffee />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <FaCoffee />,
  disabled: true,
};