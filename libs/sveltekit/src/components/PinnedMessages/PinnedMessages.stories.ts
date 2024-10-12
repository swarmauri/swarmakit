import PinnedMessages from './PinnedMessages.svelte';

export default {
  title: 'Chat/PinnedMessages',
  component: PinnedMessages,
  argTypes: {
    visible: { control: 'boolean' },
    pinned: { control: 'boolean' },
    messageContent: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: PinnedMessages,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  visible: true,
  pinned: false,
  messageContent: 'This is a pinned message',
};

export const Pinned = Template.bind({});
Pinned.args = {
  visible: true,
  pinned: true,
  messageContent: 'This is a pinned message',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  visible: true,
  pinned: false,
  messageContent: 'This is a pinned message',
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
  pinned: false,
  messageContent: 'This is a pinned message',
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
  pinned: false,
  messageContent: 'This is a pinned message',
};