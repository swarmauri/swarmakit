import ProgressCircle from './ProgressCircle.svelte';

export default {
  title: 'Indicators/ProgressCircle',
  component: ProgressCircle,
  argTypes: {
    progress: {
      control: { type: 'number', min: 0, max: 100 },
    },
    status: {
      control: { type: 'select', options: ['complete', 'incomplete', 'paused', 'active'] },
    },
  },
};

const Template = (args) => ({
  Component: ProgressCircle,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  status: 'active',
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  status: 'complete',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 0,
  status: 'incomplete',
};

export const Paused = Template.bind({});
Paused.args = {
  progress: 50,
  status: 'paused',
};

export const Active = Template.bind({});
Active.args = {
  progress: 75,
  status: 'active',
};