import React from 'react';
import IconButton from './IconButton';
import { FaStar } from 'react-icons/fa';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <IconButton {...args} icon={<FaStar />} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  disabled: false,
};
Active.parameters = {
  pseudo: { active: true },
};

export const Hover = Template.bind({});
Hover.args = {
  disabled: false,
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};