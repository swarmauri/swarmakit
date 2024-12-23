import React from 'react';
import { Meta, Story } from '@storybook/react';
import Accordion from './Accordion';

export default {
  title: 'component/Lists/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  content: 'This is the accordion content.',
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  title: 'Accordion Title',
  content: 'This is the accordion content.',
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  title: 'Accordion Title',
  content: 'This is the accordion content.',
  isOpen: false,
};

export const Hover = Template.bind({});
Hover.args = {
  title: 'Accordion Title',
  content: 'This is the accordion content.',
  isOpen: false,
};