import React from 'react';
import IconButton from './IconButton';
import { FaStar } from 'react-icons/fa';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaStar />,
  onClick: () => alert('Icon Button Clicked!'),
  disabled: false,
  label: 'Star Icon Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <FaStar />,
  onClick: () => alert('Icon Button Clicked!'),
  disabled: true,
  label: 'Disabled Star Icon Button',
};