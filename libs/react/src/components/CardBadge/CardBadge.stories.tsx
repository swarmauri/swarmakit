import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardBadge, { CardBadgeProps } from './CardBadge';

export default {
  title: 'component/Card Elements/CardBadge',
  component: CardBadge,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardBadgeProps> = (args) => <CardBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default',
  status: 'default',
};

export const Active = Template.bind({});
Active.args = {
  content: 'Active',
  status: 'active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  content: 'Inactive',
  status: 'inactive',
};

export const Hovered = Template.bind({});
Hovered.args = {
  content: 'Hovered',
  status: 'hovered',
};