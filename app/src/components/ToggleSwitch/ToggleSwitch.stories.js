import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return (
    <ToggleSwitch
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};