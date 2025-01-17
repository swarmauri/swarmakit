import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventFilterBar from './EventFilterBar';

export default {
  title: 'component/Scheduling/EventFilterBar',
  component: EventFilterBar,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <EventFilterBar {...args} />;

export const Default = Template.bind({});

export const FilterApplied = Template.bind({});
// Simulate filter applied state

export const FilterCleared = Template.bind({});
// Simulate filter cleared state