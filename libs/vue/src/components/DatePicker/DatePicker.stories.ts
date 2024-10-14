import DatePicker from './DatePicker.vue';

export default {
  component: DatePicker,
  title: 'component/Forms/DatePicker',
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      control: { type: 'date' },
    },
    endDate: {
      control: { type: 'date' },
    },
    selectedTime: {
      control: { type: 'time' },
    },
    isDateRange: {
      control: { type: 'boolean' },
    },
    isTimePicker: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { DatePicker },
  setup() {
    return { args };
  },
  template: '<DatePicker v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  startDate: '',
  endDate: '',
  selectedTime: '',
  isDateRange: false,
  isTimePicker: false,
  disabled: false,
};

export const SingleDate = Template.bind({});
SingleDate.args = {
  startDate: new Date().toISOString().split('T')[0],
  isDateRange: false,
  isTimePicker: false,
  disabled: false,
};

export const DateRange = Template.bind({});
DateRange.args = {
  startDate: new Date().toISOString().split('T')[0],
  endDate: new Date().toISOString().split('T')[0],
  isDateRange: true,
  isTimePicker: false,
  disabled: false,
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  selectedTime: '12:00',
  isDateRange: false,
  isTimePicker: true,
  disabled: false,
};