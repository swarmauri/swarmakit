import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardBody, { CardBodyProps } from './CardBody';

export default {
  title: 'component/Card Elements/CardBody',
  component: CardBody,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardBodyProps> = (args) => <CardBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is the card body content.',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  content: 'This is the card body content that can be expanded or collapsed.',
  expandable: true,
  initialExpanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Collapsed.args,
  initialExpanded: true,
};

export const Overflow = Template.bind({});
Overflow.args = {
  content: 'This is a long content that will overflow and demonstrate scrollability within the card body. '.repeat(10),
  expandable: false,
};