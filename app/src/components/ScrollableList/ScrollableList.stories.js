import React from 'react';
import ScrollableList from './ScrollableList';

export default {
  title: 'Lists/ScrollableList',
  component: ScrollableList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ScrollableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  disabled: false,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  items: Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`),
  disabled: false,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: ['Item 1', 'Item 2'],
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  disabled: true,
};