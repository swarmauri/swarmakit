import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Lists/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  children: 'Accordion Content',
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
};
Open.play = ({ canvasElement }) => {
  const header = canvasElement.querySelector('div[style="cursor: pointer;"]');
  header.click();
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.parameters = {
  pseudo: { hover: true },
};