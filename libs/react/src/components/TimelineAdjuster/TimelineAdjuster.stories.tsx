import React from 'react';
import { Meta, Story } from '@storybook/react';
import TimelineAdjuster, { TimelineAdjusterProps } from './TimelineAdjuster';

export default {
  title: 'component/Scheduling/TimelineAdjuster',
  component: TimelineAdjuster,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TimelineAdjusterProps> = (args) => <TimelineAdjuster {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialZoomLevel: 12,
};

export const TimelineAdjusted = Template.bind({});
TimelineAdjusted.args = {
  initialZoomLevel: 6,
};

export const TimeRangeSet = Template.bind({});
TimeRangeSet.args = {
  initialZoomLevel: 24,
};