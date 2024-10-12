import DatePicker from './DatePicker.svelte';

export default {
  title: 'Components/Forms',
  component: DatePicker,
  tags: ['autodocs']
};

export const SingleDate = {
  args: {
    selectedDate: '',
    startDate: '',
    endDate: '',
    showTimePicker: false
  }
};

export const DateRange = {
  args: {
    ...SingleDate.args,
    startDate: '2023-01-01',
    endDate: '2023-01-07'
  }
};

export const TimePicker = {
  args: {
    ...SingleDate.args,
    showTimePicker: true
  }
};