import ThreadAvatar from './ThreadAvatar.svelte';

export default {
  title: 'Threads/ThreadAvatar',
  component: ThreadAvatar,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['online', 'offline', 'active', 'away', 'busy'],
      },
    },
  },
};

const Template = (args) => ({
  Component: ThreadAvatar,
  props: args,
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

export const Active = Template.bind({});
Active.args = {
  status: 'active',
};

export const Away = Template.bind({});
Away.args = {
  status: 'away',
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'busy',
};