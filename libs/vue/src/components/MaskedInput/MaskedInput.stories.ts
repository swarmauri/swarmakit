import MaskedInput from './MaskedInput.vue';

export default {
  title: 'Forms/MaskedInput',
  component: MaskedInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    id: { control: 'text' },
    isMasked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { MaskedInput },
  setup() {
    return { args };
  },
  template: '<MaskedInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Masked Input',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'default-masked-input',
  isMasked: true,
  disabled: false,
};

export const Masked = Template.bind({});
Masked.args = {
  label: 'Masked Input',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'masked-input',
  isMasked: true,
  disabled: false,
};

export const Unmasked = Template.bind({});
Unmasked.args = {
  label: 'Unmasked Input',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'unmasked-input',
  isMasked: false,
  disabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  label: 'Focused Input',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'focused-input',
  isMasked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'disabled-input',
  isMasked: true,
  disabled: true,
};