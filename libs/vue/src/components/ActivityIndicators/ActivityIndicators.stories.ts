import ActivityIndicators from './ActivityIndicators.vue';

export default {
  title: 'Indicators/ActivityIndicators',
  component: ActivityIndicators,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select', options: ['loading', 'success', 'error'] },
    },
  },
};

const Template = (args: any) => ({
  components: { ActivityIndicators },
  setup() {
    return { args };
  },
  template: '<ActivityIndicators v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'loading',
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
};