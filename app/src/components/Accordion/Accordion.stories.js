import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Lists/Accordion',
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  children: 'This is the default content of the accordion.',
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  children: 'This accordion is open.',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  children: 'This accordion is closed.',
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  children: 'This accordion is being hovered over.',
};