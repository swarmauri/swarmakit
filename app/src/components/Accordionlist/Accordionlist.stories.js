import React from 'react';
import AccordionList from './AccordionList';

export default {
  title: 'Lists/AccordionList',
  component: AccordionList,
};

const Template = (args) => <AccordionList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Accordion 1', content: 'Content for accordion 1' },
    { title: 'Accordion 2', content: 'Content for accordion 2' },
    { title: 'Accordion 3', content: 'Content for accordion 3' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    { title: 'Accordion 1', content: 'Content for accordion 1' },
    { title: 'Accordion 2', content: 'Content for accordion 2' },
    { title: 'Accordion 3', content: 'Content for accordion 3' },
  ],
};
Expanded.parameters = {
  openIndex: 0, // Opens the first accordion by default
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    { title: 'Accordion 1', content: 'Content for accordion 1' },
    { title: 'Accordion 2', content: 'Content for accordion 2' },
    { title: 'Accordion 3', content: 'Content for accordion 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { title: 'Accordion 1', content: 'Content for accordion 1' },
    { title: 'Accordion 2', content: 'Content for accordion 2' },
    { title: 'Accordion 3', content: 'Content for accordion 3' },
  ],
};
Hover.parameters = {
  pseudo: { hover: true },
};