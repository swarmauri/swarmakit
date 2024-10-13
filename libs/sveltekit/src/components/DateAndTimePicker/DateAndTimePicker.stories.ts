import DateAndTimePicker from './DateAndTimePicker.svelte';

export default {
  title: 'Forms/DateAndTimePicker',
  component: DateAndTimePicker,
  tags: ['autodocs'],
};

export const DateSelected = {
  args: {
    selectedDate: '2023-10-10',
    selectedTime: '',
    disabled: false,
  },
};

export const TimeSelected = {
  args: {
    selectedDate: '',
    selectedTime: '14:30',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    selectedDate: '',
    selectedTime: '',
    disabled: true,
  },
};