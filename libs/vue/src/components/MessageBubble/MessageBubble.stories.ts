import MessageBubble from './MessageBubble.vue';

export default {
  title: 'Chat/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
  argTypes: {
    status: { 
      control: 'select',
      options: ['sent', 'received', 'read', 'unread'],
    },
  },
};

const Template = (args: any) => ({
  components: { MessageBubble },
  setup() {
    return { args };
  },
  template: `
    <MessageBubble v-bind="args">
      <p>This is a message bubble.</p>
    </MessageBubble>
  `,
});

export const Default = Template.bind({});
Default.args = {
  status: 'unread',
};

export const Sent = Template.bind({});
Sent.args = {
  status: 'sent',
};

export const Received = Template.bind({});
Received.args = {
  status: 'received',
};

export const Read = Template.bind({});
Read.args = {
  status: 'read',
};

export const Unread = Template.bind({});
Unread.args = {
  status: 'unread',
};