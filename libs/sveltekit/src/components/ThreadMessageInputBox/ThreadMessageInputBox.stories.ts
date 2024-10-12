import ThreadMessageInputBox from './ThreadMessageInputBox.svelte';

export default {
  title: 'Threads/ThreadMessageInputBox',
  component: ThreadMessageInputBox,
  argTypes: {
    isFocused: { control: 'boolean' },
    isTyping: { control: 'boolean' },
    message: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: ThreadMessageInputBox,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isFocused: false,
  isTyping: false,
  message: '',
};

export const Focused = Template.bind({});
Focused.args = {
  isFocused: true,
  isTyping: false,
  message: '',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  isFocused: false,
  isTyping: false,
  message: '',
};

export const Typing = Template.bind({});
Typing.args = {
  isFocused: true,
  isTyping: true,
  message: 'Hello, this is a test message.',
};

export const Empty = Template.bind({});
Empty.args = {
  isFocused: false,
  isTyping: false,
  message: '',
};