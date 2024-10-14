import ValidationMessages from './ValidationMessages.vue';

export default {
  component: ValidationMessages,
  title: 'component/Forms/ValidationMessages',
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: { type: 'select' }, 
      options: ['success', 'error', 'warning'] 
    },
  },
};

const Template = (args) => ({
  components: { ValidationMessages },
  setup() {
    return { args };
  },
  template: '<ValidationMessages v-bind="args">This is a validation message.</ValidationMessages>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'success',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};