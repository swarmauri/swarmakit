import React from 'react';
import Scrollablelist from './Scrollablelist';

export default {
  title: 'Lists/Scrollablelist',
  component: Scrollablelist,
};

const Template = (args) => <Scrollablelist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => ({ id: i, name: `Item ${i + 1}` })),
  onItemSelect: (id) => console.log(`Selected item ${id}`),
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  ...Default.args,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: Array.from({ length: 5 }, (_, i) => ({ id: i, name: `Item ${i + 1}` })),
  onItemSelect: (id) => console.log(`Selected item ${id}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};