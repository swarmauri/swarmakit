import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.selected || false);
  return (
    <RadioButton
      {...args}
      selected={selected}
      onChange={() => setSelected(!selected)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected Radio Button',
  selected: true,
};

export const Unselected = Template.bind({});
Unselected.args = {
  label: 'Unselected Radio Button',
  selected: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio Button',
  disabled: true,
};