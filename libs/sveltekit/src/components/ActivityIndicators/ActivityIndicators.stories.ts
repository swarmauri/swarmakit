import ActivityIndicators from './ActivityIndicators.svelte';

export default {
  title: 'Indicators/ActivityIndicators',
  component: ActivityIndicators,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['loading', 'success', 'error'],
    },
  },
};

const Template = (args) => ({
  Component: ActivityIndicators,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: 'loading',
};

export const Loading = Template.bind({});
Loading.args = {
  status: 'loading',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
};