import React, { useState } from 'react';
import CheckboxButton from './CheckboxButton';

export default {
  title: 'Forms/CheckboxButton',
  component: CheckboxButton,
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  return (
    <CheckboxButton
      {...args}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Accept Terms and Conditions',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Subscribe to newsletter',
  checked: true,
};