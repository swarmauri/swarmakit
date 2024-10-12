import DatePicker from './DatePicker.svelte';

export default {
  title: 'Components/Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    selectedDate: { control: 'date' },
    startDate: { control: 'date' },
    endDate: { control: 'date' },
    showTimePicker: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: DatePicker,
  props: args,
});

export const SingleDate = Template.bind({});
SingleDate.args = {
  selectedDate: '',
  startDate: '',
  endDate: '',
  showTimePicker: false,
};

export const DateRange = Template.bind({});
DateRange.args = {
  selectedDate: '',
  startDate: '2023-01-01',
  endDate: '2023-01-07',
  showTimePicker: false,
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  selectedDate: '',
  startDate: '',
  endDate: '',
  showTimePicker: true,
};