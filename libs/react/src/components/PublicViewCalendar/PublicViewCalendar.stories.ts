import React from 'react';
import { Meta, Story } from '@storybook/react';
import PublicViewCalendar, { PublicViewCalendarProps } from './PublicViewCalendar';

export default {
  title: 'component/Scheduling/PublicViewCalendar',
  component: PublicViewCalendar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PublicViewCalendarProps> = (args) => <PublicViewCalendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: [
    {
      id: '1',
      title: 'Public Meeting',
      category: 'Community',
      location: 'Town Hall',
      time: '10:00 AM - 11:00 AM',
      description: 'A public meeting for community discussions.',
    },
    {
      id: '2',
      title: 'Yoga Class',
      category: 'Health',
      location: 'Local Gym',
      time: '5:00 PM - 6:00 PM',
      description: 'An open yoga class for all levels.',
    },
  ],
};

export const ViewOnly = Template.bind({});
ViewOnly.args = { ...Default.args };

export const EventDetailsShown = Template.bind({});
EventDetailsShown.args = {
  ...Default.args,
  events: Default.args.events,
  selectedEvent: Default.args.events[0],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  ...Default.args,
  events: Default.args.events,
  filter: 'Community',
};