// SearchBox.stories.js
import React, { useState } from 'react';
import SearchBox from './SearchBox';

export default {
  title: 'Chat/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return <SearchBox {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  value: '',
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'Search...',
  value: '',
  autoFocus: true,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  placeholder: 'Search...',
  value: '',
};

export const Typing = Template.bind({});
Typing.args = {
  placeholder: 'Search...',
  value: 'Search text',
};

export const Empty = Template.bind({});
Empty.args = {
  placeholder: 'Search...',
  value: '',
};