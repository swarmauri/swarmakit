import TypingIndicator from './TypingIndicator.svelte';

export default {
  title: 'Chat/TypingIndicator',
  component: TypingIndicator,
  argTypes: {
    visible: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: TypingIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
};

export const Typing = Template.bind({});
Typing.args = {
  visible: true,
};