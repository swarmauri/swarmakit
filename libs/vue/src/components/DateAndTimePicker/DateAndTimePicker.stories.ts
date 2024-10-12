import DateAndTimePicker from './DateAndTimePicker.vue';

export default {
  title: 'Forms/DateAndTimePicker',
  component: DateAndTimePicker,
  tags: ['autodocs'],
  argTypes: {
    dateValue: { control: 'text' },
    timeValue: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { DateAndTimePicker },
  setup() {
    return { args };
  },
  template: '<DateAndTimePicker v-bind="args" />',
});

export const DateSelected = Template.bind({});
DateSelected.args = {
  dateValue: '2023-10-01',
  timeValue: '',
  disabled: false,
};

export const TimeSelected = Template.bind({});
TimeSelected.args = {
  dateValue: '',
  timeValue: '12:00',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  dateValue: '',
  timeValue: '',
  disabled: true,
};