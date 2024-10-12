import MessageBubble from './MessageBubble.svelte';

export default {
  title: 'Chat/MessageBubble',
  component: MessageBubble,
  argTypes: {
    message: { control: 'text' },
    status: { 
      control: { type: 'select' }, 
      options: ['sent', 'received', 'read', 'unread']
    },
  },
};

const Template = (args) => ({
  Component: MessageBubble,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: 'Hello!',
  status: 'unread',
};

export const Sent = Template.bind({});
Sent.args = {
  message: 'Hello!',
  status: 'sent',
};

export const Received = Template.bind({});
Received.args = {
  message: 'Hello!',
  status: 'received',
};

export const Read = Template.bind({});
Read.args = {
  message: 'Hello!',
  status: 'read',
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'Hello!',
  status: 'unread',
};