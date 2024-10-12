import ChatBubble from './ChatBubble.svelte';

export default {
  title: 'Miscellaneous/ChatBubble',
  component: ChatBubble,
  argTypes: {
    message: { control: 'text' },
    isRead: { control: 'boolean' },
    isHovered: { control: 'boolean' },
    isActive: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ChatBubble,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a chat message.',
  isRead: false,
  isHovered: false,
  isActive: false,
};

export const Read = Template.bind({});
Read.args = {
  message: 'This message has been read.',
  isRead: true,
  isHovered: false,
  isActive: false,
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'This message is unread.',
  isRead: false,
  isHovered: false,
  isActive: false,
};

export const Hover = Template.bind({});
Hover.args = {
  message: 'Hovering over this message.',
  isRead: false,
  isHovered: true,
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  message: 'This message is active.',
  isRead: false,
  isHovered: false,
  isActive: true,
};