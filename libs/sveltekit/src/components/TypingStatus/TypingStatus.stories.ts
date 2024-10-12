import TypingStatus from './TypingStatus.svelte';

export default {
  title: 'Chat/TypingStatus',
  component: TypingStatus,
  argTypes: {
    isVisible: { control: 'boolean' },
    isTyping: { control: 'boolean' }
  },
};

const Template = (args) => ({
  Component: TypingStatus,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isTyping: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  isTyping: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};

export const Typing = Template.bind({});
Typing.args = {
  isVisible: true,
  isTyping: true,
};

export const Paused = Template.bind({});
Paused.args = {
  isVisible: true,
  isTyping: false,
};