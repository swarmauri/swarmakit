import ProgressCircle from './ProgressCircle.svelte';

export default {
  title: 'Components/Indicators/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100 } },
    status: {
      control: 'select',
      options: ['active', 'paused', 'complete', 'incomplete'],
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
  progress: 25,
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