import React from 'react';
import AccordionList from './AccordionList';

export default {
  title: 'Lists/AccordionList',
  component: AccordionList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <AccordionList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Accordion Item 1', content: 'Content for item 1' },
    { title: 'Accordion Item 2', content: 'Content for item 2' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
};
Expanded.play = ({ canvasElement }) => {
  const headers = canvasElement.querySelectorAll('div[style="cursor: pointer;"]');
  headers.forEach(header => header.click());
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.parameters = {
  pseudo: { hover: true },
};