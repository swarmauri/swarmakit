import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.checked);

  return (
    <RadioButton
      {...args}
      checked={selected}
      onChange={() => setSelected(!selected)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'example',
  checked: false,
};

export const PreSelected = Template.bind({});
PreSelected.args = {
  label: 'Option 2',
  name: 'example',
  checked: true,
};