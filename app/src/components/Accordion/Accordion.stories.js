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
  content: 'Accordion content goes here.',
};

export const Open = Template.bind({});
Open.args = {
  title: 'Accordion Title',
  content: 'Accordion content goes here.',
};
Open.decorators = [
  (Story) => {
    const Component = Story();
    Component.props.children.props.isOpen = true;
    return Component;
  },
];

export const Closed = Template.bind({});
Closed.args = {
  title: 'Accordion Title',
  content: 'Accordion content goes here.',
};

export const Hover = Template.bind({});
Hover.args = {
  title: 'Hover over me',
  content: 'This content is revealed on hover.',
};
Hover.parameters = {
  pseudo: { hover: true },
};