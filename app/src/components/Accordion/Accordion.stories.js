import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Lists/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  isOpen: false,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};