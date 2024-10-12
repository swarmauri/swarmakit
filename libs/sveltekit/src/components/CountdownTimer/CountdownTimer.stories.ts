import CountdownTimer from './CountdownTimer.svelte';

export default {
  title: 'Indicators/CountdownTimer',
  component: CountdownTimer,
  argTypes: {
    duration: {
      control: { type: 'number' },
    },
    isRunning: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  Component: CountdownTimer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  duration: 60,
  isRunning: true,
};

export const Running = Template.bind({});
Running.args = {
  duration: 60,
  isRunning: true,
};

export const Paused = Template.bind({});
Paused.args = {
  duration: 60,
  isRunning: false,
};

export const Completed = Template.bind({});
Completed.args = {
  duration: 0,
  isRunning: false,
};