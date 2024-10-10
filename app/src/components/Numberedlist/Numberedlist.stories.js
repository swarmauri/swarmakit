import React from 'react';
import NumberedList from './NumberedList';

export default {
  title: 'Lists/NumberedList',
  component: NumberedList,
};

const Template = (args) => <NumberedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const Selected = Template.bind({});
Selected.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  disabled: true,
};