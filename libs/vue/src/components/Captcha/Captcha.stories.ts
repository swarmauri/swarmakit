import Captcha from './Captcha.vue';

export default {
  title: 'Forms/Captcha',
  component: Captcha,
  tags: ['autodocs'],
  argTypes: {
    solved: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Captcha },
  setup() {
    return { args };
  },
  template: '<Captcha v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  solved: false,
  error: false,
};

export const Solved = Template.bind({});
Solved.args = {
  solved: true,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  solved: false,
  error: true,
};