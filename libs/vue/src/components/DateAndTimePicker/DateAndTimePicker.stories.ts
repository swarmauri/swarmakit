import DateAndTimePicker from './DateAndTimePicker.vue';

export default {
  component: DateAndTimePicker,
  title: 'component/Forms/DateAndTimePicker',
  tags: ['autodocs'],
  argTypes: {
    selectedDate: {
      control: { type: 'date' },
    },
    selectedTime: {
      control: { type: 'time' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { DateAndTimePicker },
  setup() {
    return { args };
  },
  template: '<DateAndTimePicker v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  selectedDate: '',
  selectedTime: '',
  disabled: false,
};

export const DateSelected = Template.bind({});
DateSelected.args = {
  selectedDate: new Date().toISOString().split('T')[0],
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
  selectedDate: new Date().toISOString().split('T')[0],
  selectedTime: '12:00',
  disabled: true,
};