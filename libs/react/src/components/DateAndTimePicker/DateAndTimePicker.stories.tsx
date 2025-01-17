import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import DateAndTimePicker from './DateAndTimePicker';

export default {
  title: 'component/Forms/DateAndTimePicker',
  component: DateAndTimePicker,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => {
  const [dateTime, setDateTime] = useState(args.dateTime);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
  };

  return <DateAndTimePicker {...args} dateTime={dateTime} onChange={handleChange} />;
};

export const DateSelected = Template.bind({});
DateSelected.args = {
  dateTime: '2023-10-01T10:00',
  type: 'datetime-local',
  disabled: false,
};

export const TimeSelected = Template.bind({});
TimeSelected.args = {
  dateTime: '2023-10-01T15:30',
  type: 'datetime-local',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  dateTime: '2023-10-01T10:00',
  type: 'datetime-local',
  disabled: true,
};