import CountdownTimer from './CountdownTimer.vue';

export default {
  title: 'Indicators/CountdownTimer',
  component: CountdownTimer,
  tags: ['autodocs'],
  argTypes: {
    initialTime: {
      control: { type: 'number' },
      description: 'The initial countdown time in seconds',
    },
  },
};

const Template = (args: any) => ({
  components: { CountdownTimer },
  setup() {
    return { args };
  },
  template: '<CountdownTimer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  initialTime: 120,
};

export const Running = Template.bind({});
Running.args = {
  initialTime: 120,
};

export const Paused = Template.bind({});
Paused.args = {
  initialTime: 120,
};

export const Completed = Template.bind({});
Completed.args = {
  initialTime: 0,
};