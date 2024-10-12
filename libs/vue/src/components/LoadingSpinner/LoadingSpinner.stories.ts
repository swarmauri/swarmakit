import LoadingSpinner from './LoadingSpinner.vue';

export default {
  title: 'Indicators/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: { type: 'boolean' },
      description: 'Determines if the spinner is active',
    },
  },
};

const Template = (args: any) => ({
  components: { LoadingSpinner },
  setup() {
    return { args };
  },
  template: '<LoadingSpinner v-bind="args" />',
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