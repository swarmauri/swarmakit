import LoadingSpinner from './LoadingSpinner.svelte';

export default {
  title: 'Components/Indicators/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: LoadingSpinner,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  active: true,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};