import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventReminderSystem from './EventReminderSystem';

export default {
  title: 'component/Scheduling/EventReminderSystem',
  component: EventReminderSystem,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <EventReminderSystem {...args} />;

export const Default = Template.bind({});

export const ReminderSet = Template.bind({});
// Simulate reminder set state

export const ReminderSent = Template.bind({});
// Simulate reminder sent state

export const ReminderCanceled = Template.bind({});
// Simulate reminder canceled state