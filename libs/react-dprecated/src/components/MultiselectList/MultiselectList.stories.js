import React from 'react';
import MultiselectList from './MultiselectList';

export default {
  title: 'Lists/MultiselectList',
  component: MultiselectList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MultiselectList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};