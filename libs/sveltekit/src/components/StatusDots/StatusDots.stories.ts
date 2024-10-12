import StatusDots from './StatusDots.svelte';
import type { Status } from './StatusDots.svelte';

export default {
  title: 'Indicators/StatusDots',
  component: StatusDots,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: Object.values(Status),
      },
    },
  },
};

const Template = (args) => ({
  Component: StatusDots,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: Status.Offline,
};

export const Online = Template.bind({});
Online.args = {
  status: Status.Online,
};

export const Offline = Template.bind({});
Offline.args = {
  status: Status.Offline,
};

export const Busy = Template.bind({});
Busy.args = {
  status: Status.Busy,
};

export const Idle = Template.bind({});
Idle.args = {
  status: Status.Idle,
};