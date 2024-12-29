import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'component/UI Layout/Card',
  component: Card,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  content: 'This is the card content.',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  content: 'This is the card content.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  content: 'This content is hidden.',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  content: 'This content is shown on hover.',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  content: 'This content is shown when clicked.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  content: 'This content is expanded.',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  content: 'This content is collapsed.',
};