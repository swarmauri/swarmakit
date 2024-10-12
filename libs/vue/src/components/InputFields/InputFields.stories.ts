import InputFields from './InputFields.vue';

export default {
  title: 'Forms/InputFields',
  component: InputFields,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text', options: ['text', 'password', 'email'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    id: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { InputFields },
  setup() {
    return { args };
  },
  template: '<InputFields v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  label: 'Label',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'default-input',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Text Input',
  placeholder: 'Enter text',
  required: false,
  error: '',
  id: 'text-input',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password Input',
  placeholder: 'Enter password',
  required: true,
  error: '',
  id: 'password-input',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email Input',
  placeholder: 'Enter email',
  required: true,
  error: '',
  id: 'email-input',
};