import DatePicker from './DatePicker.vue';

export default {
  title: 'Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    startDate: { control: 'text' },
    endDate: { control: 'text' },
    disabled: { control: 'boolean' },
    range: { control: 'boolean' },
    timePicker: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { DatePicker },
  setup() {
    return { args };
  },
  template: '<DatePicker v-bind="args" />',
});

export const SingleDate = Template.bind({});
SingleDate.args = {
  modelValue: '',
  disabled: false,
  range: false,
  timePicker: false,
};

export const DateRange = Template.bind({});
DateRange.args = {
  startDate: '',
  endDate: '',
  disabled: false,
  range: true,
  timePicker: false,
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  modelValue: '',
  disabled: false,
  range: false,
  timePicker: true,
};