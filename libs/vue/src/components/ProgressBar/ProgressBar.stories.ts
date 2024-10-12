import ProgressBar from './ProgressBar.vue';

export default {
  title: 'Indicators/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'The current progress value',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Indicates if the progress bar is disabled',
    },
  },
};

const Template = (args: any) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: '<ProgressBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  disabled: false,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  disabled: false,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 25,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  progress: 50,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  progress: 50,
  disabled: true,
};