import ThreadReplyButton from './ThreadReplyButton.svelte';

export default {
  title: 'Threads/ThreadReplyButton',
  component: ThreadReplyButton,
  argTypes: {
    isEnabled: { control: 'boolean' },
    isHovered: { control: 'boolean' },
    isClicked: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ThreadReplyButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isEnabled: true,
  isHovered: false,
  isClicked: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
  isHovered: false,
  isClicked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isEnabled: false,
  isHovered: false,
  isClicked: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isEnabled: true,
  isHovered: true,
  isClicked: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isEnabled: true,
  isHovered: false,
  isClicked: true,
};