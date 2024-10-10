import React from 'react';
import DateRangePicker from './DateRangePicker';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

const Template = (args) => <DateRangePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onDateRangeChange: (range) => console.log('Selected date range:', range),
};

export const PredefinedRange = Template.bind({});
PredefinedRange.args = {
  onDateRangeChange: (range) => console.log('Selected date range:', range),
};
PredefinedRange.decorators = [
  (Story) => {
    const handleRangeChange = (range) => {
      console.log('Predefined range:', range);
    };
    return <DateRangePicker onDateRangeChange={handleRangeChange} />;
  },
];