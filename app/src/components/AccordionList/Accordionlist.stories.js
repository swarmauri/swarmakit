import React from 'react';
import AccordionList from './AccordionList';

export default {
  title: 'Lists/AccordionList',
  component: AccordionList,
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = (args) => <AccordionList {...args} />;

const sampleItems = [
  { title: 'Accordion 1', content: 'Content for Accordion 1' },
  { title: 'Accordion 2', content: 'Content for Accordion 2' },
  { title: 'Accordion 3', content: 'Content for Accordion 3' },
];

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: sampleItems.map(item => ({ ...item, isOpen: true })),
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: sampleItems.map(item => ({ ...item, isOpen: false })),
};

export const Hover = Template.bind({});
Hover.args = {
  items: sampleItems,
};