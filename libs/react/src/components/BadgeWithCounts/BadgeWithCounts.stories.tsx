import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BadgeWithCounts, {BadgeWithCountsProps} from './BadgeWithCounts';

export default {
  title: 'component/Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<BadgeWithCountsProps> = (args) => <BadgeWithCounts {...args} />;

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