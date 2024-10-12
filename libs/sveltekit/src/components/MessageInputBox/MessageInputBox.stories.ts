import MessageInputBox from './MessageInputBox.svelte';

export default {
  title: 'Chat/MessageInputBox',
  component: MessageInputBox,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    focused: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: MessageInputBox,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Type a message...',
  focused: false,
};

export const Focused = Template.bind({});
Focused.args = {
  value: '',
  placeholder: 'Type a message...',
  focused: true,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  value: '',
  placeholder: 'Type a message...',
  focused: false,
};

export const Typing = Template.bind({});
Typing.args = {
  value: 'Hello, world!',
  placeholder: 'Type a message...',
  focused: true,
};

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: 'Type a message...',
  focused: false,
};