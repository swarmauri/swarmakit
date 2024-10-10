import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    handleToggle: { action: 'toggled' },
  },
};

const Template = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOn: false,
  disabled: false,
};

export const On = Template.bind({});
On.args = {
  isOn: true,
  disabled: false,
};

export const Off = Template.bind({});
Off.args = {
  isOn: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isOn: false,
  disabled: true,
};