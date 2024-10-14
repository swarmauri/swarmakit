import ActivityIndicators from './ActivityIndicators.vue';

export default {
  component: ActivityIndicators,
  title: 'component/Indicators/ActivityIndicators',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['loading', 'success', 'error'],
    },
    message: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  components: { ActivityIndicators },
  setup() {
    return { args };
  },
  template: '<ActivityIndicators v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'loading',
  message: 'Loading...',
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'loading',
  message: 'Loading...',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Operation successful!',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'An error occurred!',
};