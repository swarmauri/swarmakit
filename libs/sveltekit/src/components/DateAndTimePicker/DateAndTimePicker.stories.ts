import DateAndTimePicker from './DateAndTimePicker.svelte';

export default {
  title: 'Components/Forms/DateAndTimePicker',
  component: DateAndTimePicker,
  tags: ['autodocs'],
  argTypes: {
    selectedDate: { control: 'date' },
    selectedTime: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: DateAndTimePicker,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selectedDate: '',
  selectedTime: '',
  disabled: false,
};

export const DateSelected = Template.bind({});
DateSelected.args = {
  selectedDate: '2023-01-01',
  selectedTime: '',
  disabled: false,
};

export const TimeSelected = Template.bind({});
TimeSelected.args = {
  selectedDate: '',
  selectedTime: '12:00',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedDate: '',
  selectedTime: '',
  disabled: true,
};