import React from 'react';
import { Meta, Story } from '@storybook/react';
import CalendarView, { CalendarViewProps } from './CalendarView';

export default {
  title: 'component/Scheduling/CalendarView',
  component: CalendarView,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CalendarViewProps> = (args) => <CalendarView {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: [
    { id: 1, title: 'Meeting with Team', description: 'Discuss project updates', start: new Date(), end: new Date() },
    { id: 2, title: 'Doctor Appointment', description: 'Regular check-up', start: new Date(), end: new Date() },
  ],
  onEventClick: (event) => console.log(`Clicked on event: ${event.title}`),
  onEventAdd: (event) => console.log(`Added event: ${event.title}`),
  onEventEdit: (event) => console.log(`Edited event: ${event.title}`),
  onEventDelete: (id) => console.log(`Deleted event with id: ${id}`),
};

export const DayView = Template.bind({});
DayView.args = { ...Default.args };

export const WeekView = Template.bind({});
WeekView.args = { ...Default.args };

export const MonthView = Template.bind({});
MonthView.args = { ...Default.args };

export const YearView = Template.bind({});
YearView.args = { ...Default.args };

export const AgendaView = Template.bind({});
AgendaView.args = { ...Default.args };