import React, { useState } from 'react';
import TextArea from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <TextArea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Description',
  placeholder: 'Enter your description',
};

export const WithCustomRows = Template.bind({});
WithCustomRows.args = {
  label: 'Feedback',
  placeholder: 'Enter your feedback',
  rows: 10,
};