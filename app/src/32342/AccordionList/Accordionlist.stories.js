import React from 'react';
import AccordionList from './AccordionList';

export default {
  title: 'Lists/AccordionList',
  component: AccordionList,
};

const Template = (args) => <AccordionList {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'List Header',
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
  items: ['Item 1', 'Item 2'],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  items: ['Hovered Item 1', 'Hovered Item 2'],
};