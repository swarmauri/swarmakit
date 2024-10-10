import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return <ToggleSwitch {...args} checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const On = Template.bind({});
On.args = {
  checked: true,
  disabled: false,
};

export const Off = Template.bind({});
Off.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};