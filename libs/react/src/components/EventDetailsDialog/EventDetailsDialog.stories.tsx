import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventDetailsDialog, { EventDetailsDialogProps } from './EventDetailsDialog';

export default {
  title: 'component/Scheduling/EventDetailsDialog',
  component: EventDetailsDialog,
  tags: ['autodocs'],
} as Meta;

const Template: Story<EventDetailsDialogProps> = (args) => <EventDetailsDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  isLoading: false,
  isError: false,
  eventDetails: {
    title: 'Team Meeting',
    description: 'Discuss project updates and next steps.',
    participants: ['Alice', 'Bob', 'Charlie'],
    location: 'Conference Room B',
    time: '10:00 AM - 11:00 AM',
  },
  onClose: () => console.log('Dialog closed'),
  onEdit: () => console.log('Edit event'),
  onDelete: () => console.log('Delete event'),
  onDuplicate: () => console.log('Duplicate event'),
};

export const Open = Template.bind({});
Open.args = { ...Default.args, isOpen: true };

export const Closed = Template.bind({});
Closed.args = { ...Default.args };

export const Loading = Template.bind({});
Loading.args = { ...Default.args, isOpen: true, isLoading: true };

export const Error = Template.bind({});
Error.args = { ...Default.args, isOpen: true, isError: true };