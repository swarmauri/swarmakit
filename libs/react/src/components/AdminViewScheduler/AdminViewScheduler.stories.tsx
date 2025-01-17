import React from 'react';
import { Meta, Story } from '@storybook/react';
import AdminViewScheduler, { AdminViewSchedulerProps } from './AdminViewScheduler';

export default {
  title: 'component/Scheduling/AdminViewScheduler',
  component: AdminViewScheduler,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AdminViewSchedulerProps> = (args) => <AdminViewScheduler {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialEvents: [
    {
      id: '1',
      title: 'Team Meeting',
      category: 'Work',
      location: 'Conference Room',
      time: '9:00 AM - 10:00 AM',
      description: 'Monthly team meeting.',
    },
    {
      id: '2',
      title: 'Project Deadline',
      category: 'Deadline',
      location: 'Office',
      time: 'All Day',
      description: 'Final project submission date.',
    },
  ],
};

export const EventAdded = Template.bind({});
EventAdded.args = {
  initialEvents: [...Default.args.initialEvents],
};

export const EventEdited = Template.bind({});
EventEdited.args = {
  initialEvents: [
    ...Default.args.initialEvents.map(event => 
      event.id === '1' ? { ...event, title: 'Updated Team Meeting' } : event
    ),
  ],
};

export const EventDeleted = Template.bind({});
EventDeleted.args = {
  initialEvents: Default.args.initialEvents.filter(event => event.id !== '1'),
};