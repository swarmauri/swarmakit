import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';

export default {
  title: 'component/Lists/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

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