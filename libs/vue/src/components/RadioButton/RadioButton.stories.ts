import RadioButton from './RadioButton.vue';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    modelValue: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { RadioButton },
  setup() {
    return { args };
  },
  template: '<RadioButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Option',
  id: 'default-radio',
  name: 'radio-group',
  value: 'default',
  modelValue: null,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Option',
  id: 'selected-radio',
  name: 'radio-group',
  value: 'selected',
  modelValue: 'selected',
  disabled: false,
};

export const Unselected = Template.bind({});
Unselected.args = {
  label: 'Option',
  id: 'unselected-radio',
  name: 'radio-group',
  value: 'unselected',
  modelValue: null,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option',
  id: 'disabled-radio',
  name: 'radio-group',
  value: 'disabled',
  modelValue: null,
  disabled: true,
};