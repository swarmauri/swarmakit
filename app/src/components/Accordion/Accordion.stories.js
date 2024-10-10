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
  children: 'This is the content of the accordion.',
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  title: 'Accordion Title',
  children: 'This is the content of the accordion.',
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  title: 'Accordion Title',
  children: 'This is the content of the accordion.',
  isOpen: false,
};

export const Hover = Template.bind({});
Hover.args = {
  title: 'Accordion Title',
  children: 'This is the content of the accordion.',
  isOpen: false,
};
Hover.parameters = {
  pseudo: { hover: true },
};