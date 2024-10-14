import PasswordConfirmationField from './PasswordConfirmationField.vue';

export default {
  component: PasswordConfirmationField,
  title: 'component/Forms/PasswordConfirmationField',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { PasswordConfirmationField },
  setup() {
    return { args };
  },
  template: '<PasswordConfirmationField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Matching = Template.bind({});
Matching.args = {
  disabled: false,
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};