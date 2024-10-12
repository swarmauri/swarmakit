import ActivityIndicators from './ActivityIndicators.svelte';

export default {
  title: 'Components/Indicators/ActivityIndicators',
  component: ActivityIndicators,
  tags: ['autodocs'],
  argTypes: {
    state: { control: { type: 'select', options: ['loading', 'success', 'error'] } },
  },
};

const Template = (args) => ({
  Component: ActivityIndicators,
  props: args,
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