import ChatBubble from './ChatBubble.vue';

export default {
  title: 'Miscellaneous/ChatBubble',
  component: ChatBubble,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    read: { control: 'boolean' },
    unread: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ChatBubble },
  setup() {
    return { args };
  },
  template: '<ChatBubble v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a chat bubble',
  read: false,
  unread: false,
};

export const Read = Template.bind({});
Read.args = {
  message: 'This message has been read',
  read: true,
  unread: false,
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'This message is unread',
  read: false,
  unread: true,
};

export const Hover = Template.bind({});
Hover.args = {
  message: 'Hover over this message',
  read: false,
  unread: false,
};

export const Active = Template.bind({});
Active.args = {
  message: 'This message is active',
  read: false,
  unread: false,
};