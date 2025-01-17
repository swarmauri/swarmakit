import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScheduleCRUDPanel from './ScheduleCRUDPanel';

export default {
  title: 'component/Scheduling/ScheduleCRUDPanel',
  component: ScheduleCRUDPanel,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <ScheduleCRUDPanel {...args} />;

export const Default = Template.bind({});

export const EventCreated = Template.bind({});
// Simulate event creation state

export const EventUpdated = Template.bind({});
// Simulate event update state

export const EventDeleted = Template.bind({});
// Simulate event deletion state