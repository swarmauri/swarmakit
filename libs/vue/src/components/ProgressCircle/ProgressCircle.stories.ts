import ProgressCircle from './ProgressCircle.vue';

export default {
  title: 'Indicators/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'The current progress value',
    },
    state: {
      control: { type: 'select', options: ['active', 'paused', 'complete', 'incomplete'] },
      description: 'The current state of the progress circle',
    },
  },
};

const Template = (args: any) => ({
  components: { ProgressCircle },
  setup() {
    return { args };
  },
  template: '<ProgressCircle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  state: 'active',
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  state: 'complete',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 25,
  state: 'incomplete',
};

export const Paused = Template.bind({});
Paused.args = {
  progress: 50,
  state: 'paused',
};

export const Active = Template.bind({});
Active.args = {
  progress: 75,
  state: 'active',
};