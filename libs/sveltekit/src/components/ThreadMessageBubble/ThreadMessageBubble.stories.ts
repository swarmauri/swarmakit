import ThreadMessageBubble from './ThreadMessageBubble.svelte';

export default {
  title: 'Threads/ThreadMessageBubble',
  component: ThreadMessageBubble,
  argTypes: {
    message: { control: 'text' },
    isSent: { control: 'boolean' },
    isRead: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ThreadMessageBubble,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a message.',
  isSent: true,
  isRead: false,
};

export const Sent = Template.bind({});
Sent.args = {
  message: 'This is a sent message.',
  isSent: true,
  isRead: false,
};

export const Received = Template.bind({});
Received.args = {
  message: 'This is a received message.',
  isSent: false,
  isRead: false,
};

export const Read = Template.bind({});
Read.args = {
  message: 'This message has been read.',
  isSent: true,
  isRead: true,
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'This message is unread.',
  isSent: true,
  isRead: false,
};