import LoadingSpinner from './LoadingSpinner.svelte';

export default {
  title: 'Indicators/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  Component: LoadingSpinner,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isActive: true,
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  isActive: false,
};