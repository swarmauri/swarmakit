import GroupMemberAvatar from './GroupMemberAvatar.svelte';

export default {
  title: 'Chat/GroupMemberAvatar',
  component: GroupMemberAvatar,
  argTypes: {
    imageUrl: { control: 'text' },
    status: { 
      control: { type: 'select', options: ['online', 'offline', 'active', 'away', 'busy'] }
    },
  },
};

const Template = (args) => ({
  Component: GroupMemberAvatar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'offline',
};

export const Online = Template.bind({});
Online.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'offline',
};

export const Active = Template.bind({});
Active.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'active',
};

export const Away = Template.bind({});
Away.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'away',
};

export const Busy = Template.bind({});
Busy.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'busy',
};