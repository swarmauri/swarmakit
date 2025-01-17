import React from 'react';
import { Meta, Story } from '@storybook/react';
import BadgeWithCounts from './BadgeWithCounts';

export default {
  title: 'component/Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <BadgeWithCounts {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 5,
};

export const Zero = Template.bind({});
Zero.args = {
  count: 0,
};

export const Active = Template.bind({});
Active.args = {
  count: 10,
};

export const Overflow = Template.bind({});
Overflow.args = {
  count: 150,
  maxCount: 99,
};