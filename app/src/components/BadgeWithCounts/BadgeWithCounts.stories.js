import React from 'react';
import BadgeWithCounts from './BadgeWithCounts';

export default {
  title: 'Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
};

const Template = (args) => <BadgeWithCounts {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
};

export const Zero = Template.bind({});
Zero.args = {
  count: 0,
};

export const Active = Template.bind({});
Active.args = {
  count: 50,
};

export const Overflow = Template.bind({});
Overflow.args = {
  count: 150,
};