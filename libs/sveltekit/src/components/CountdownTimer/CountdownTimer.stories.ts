import CountdownTimer from './CountdownTimer.svelte';

export default {
  title: 'Components/Indicators/CountdownTimer',
  component: CountdownTimer,
  tags: ['autodocs'],
  argTypes: {
    duration: { control: 'number' },
    isPaused: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: CountdownTimer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  duration: 60,
  isPaused: false,
};

export const Running = Template.bind({});
Running.args = {
  duration: 60,
  isPaused: false,
};

export const Paused = Template.bind({});
Paused.args = {
  duration: 60,
  isPaused: true,
};

export const Completed = Template.bind({});
Completed.args = {
  duration: 0,
  isPaused: false,
};