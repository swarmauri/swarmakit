import React from 'react';
import { Meta, Story } from '@storybook/react';
import DragAndDropScheduler, { DragAndDropSchedulerProps } from './DragAndDropScheduler';

export default {
  title: 'component/Scheduling/DragAndDropScheduler',
  component: DragAndDropScheduler,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DragAndDropSchedulerProps> = (args) => <DragAndDropScheduler {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: [
    { id: 1, title: 'Event 1', start: new Date(new Date().setHours(9)), end: new Date(new Date().setHours(10)) },
    { id: 2, title: 'Event 2', start: new Date(new Date().setHours(11)), end: new Date(new Date().setHours(12)) },
  ],
  onEventDrop: (event, newStart, newEnd) => console.log(`Dropped event: ${event.title}, new start: ${newStart}, new end: ${newEnd}`),
  onEventResize: (event, newEnd) => console.log(`Resized event: ${event.title}, new end: ${newEnd}`),
};

export const EventDragging = Template.bind({});
EventDragging.args = {
  ...Default.args,
  events: Default.args.events.map((event, index) => ({
    ...event,
    isDragging: index === 0,
  })),
};

export const EventDropped = Template.bind({});
EventDropped.args = { ...Default.args };

export const EventRescheduled = Template.bind({});
EventRescheduled.args = { ...Default.args };