import React from 'react';
import { Meta, Story } from '@storybook/react';
import RecurringEventScheduler, { RecurringEventSchedulerProps } from './RecurringEventScheduler';

export default {
  title: 'component/Scheduling/RecurringEventScheduler',
  component: RecurringEventScheduler,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RecurringEventSchedulerProps> = (args) => <RecurringEventScheduler {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialEvents: [],
};

export const EventCreated = Template.bind({});
EventCreated.args = {
  initialEvents: [
    {
      id: '1',
      title: 'Weekly Standup',
      recurrencePattern: 'weekly',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      description: 'Weekly team standup meeting.',
    },
  ],
};

export const RecurrenceSet = Template.bind({});
RecurrenceSet.args = {
  initialEvents: [
    ...EventCreated.args.initialEvents,
    {
      id: '2',
      title: 'Monthly Review',
      recurrencePattern: 'monthly',
      startDate: '2023-10-01',
      endDate: '2024-10-01',
      description: 'Monthly project review meeting.',
    },
  ],
};

export const RecurrenceEnded = Template.bind({});
RecurrenceEnded.args = {
  initialEvents: EventCreated.args.initialEvents.map(event =>
    event.id === '1' ? { ...event, endDate: '2023-11-01' } : event
  ),
};