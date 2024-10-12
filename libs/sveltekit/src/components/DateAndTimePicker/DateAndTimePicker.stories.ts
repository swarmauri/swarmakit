import DateAndTimePicker from './DateAndTimePicker.svelte';

export default {
  title: 'Components/Forms',
  component: DateAndTimePicker,
  tags: ['autodocs']
};

export const Default = {
  args: {
    selectedDate: '',
    selectedTime: '',
    isDisabled: false
  }
};

export const DateSelected = {
  args: {
    ...Default.args,
    selectedDate: '2023-01-01'
  }
};

export const TimeSelected = {
  args: {
    ...Default.args,
    selectedTime: '12:00'
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    isDisabled: true
  }
};