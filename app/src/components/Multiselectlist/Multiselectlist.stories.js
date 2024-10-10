import React from 'react';
import MultiSelectList from './MultiSelectList';

export default {
  title: 'Lists/MultiSelectList',
  component: MultiSelectList,
};

const Template = (args) => <MultiSelectList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};