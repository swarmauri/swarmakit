import DatePicker from './DatePicker.svelte';

export default {
  title: 'Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export const SingleDate = {
  args: {
    selectedDate: '',
    rangePicker: false,
    timePicker: false,
  },
};

export const DateRange = {
  args: {
    startDate: '',
    endDate: '',
    rangePicker: true,
    timePicker: false,
  },
};

export const TimePicker = {
  args: {
    selectedDate: '',
    time: '',
    rangePicker: false,
    timePicker: true,
  },
};