import StatusDots from './StatusDots.vue';

export default {
  title: 'Indicators/StatusDots',
  component: StatusDots,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select', options: ['online', 'offline', 'busy', 'idle'] },
      description: 'The current status represented by the dot',
    },
  },
};

const Template = (args: any) => ({
  components: { StatusDots },
  setup() {
    return { args };
  },
  template: '<StatusDots v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  status: 'offline',
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'busy',
};

export const Idle = Template.bind({});
Idle.args = {
  status: 'idle',
};