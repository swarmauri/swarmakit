import NumberInputWithIncrement from './NumberInputWithIncrement.vue';

export default {
  title: 'Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    id: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { NumberInputWithIncrement },
  setup() {
    return { args };
  },
  template: '<NumberInputWithIncrement v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Number Input',
  min: 0,
  max: 100,
  step: 1,
  required: false,
  error: '',
  id: 'default-number-input',
  disabled: false,
};

export const Increment = Template.bind({});
Increment.args = {
  label: 'Increment Input',
  min: 0,
  max: 100,
  step: 1,
  required: false,
  error: '',
  id: 'increment-input',
  disabled: false,
};

export const Decrement = Template.bind({});
Decrement.args = {
  label: 'Decrement Input',
  min: 0,
  max: 100,
  step: 1,
  required: false,
  error: '',
  id: 'decrement-input',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  min: 0,
  max: 100,
  step: 1,
  required: false,
  error: '',
  id: 'disabled-input',
  disabled: true,
};