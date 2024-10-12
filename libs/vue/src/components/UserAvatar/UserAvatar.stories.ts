import UserAvatar from './UserAvatar.vue';

export default {
  title: 'Chat/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    altText: { control: 'text' },
    status: {
      control: 'select',
      options: ['online', 'offline', 'active', 'away', 'busy'],
    },
  },
};

const Template = (args: any) => ({
  components: { UserAvatar },
  setup() {
    return { args };
  },
  template: `
    <UserAvatar v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/150',
  altText: 'User Avatar',
  status: 'offline',
};

export const Online = Template.bind({});
Online.args = {
  ...Default.args,
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  ...Default.args,
  status: 'offline',
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  status: 'active',
};

export const Away = Template.bind({});
Away.args = {
  ...Default.args,
  status: 'away',
};

export const Busy = Template.bind({});
Busy.args = {
  ...Default.args,
  status: 'busy',
};