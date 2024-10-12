import ThreadSendButton from './ThreadSendButton.svelte';

export default {
  title: 'Threads/ThreadSendButton',
  component: ThreadSendButton,
  argTypes: {
    isEnabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ThreadSendButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isEnabled: true,
};

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isEnabled: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isEnabled: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isEnabled: true,
};