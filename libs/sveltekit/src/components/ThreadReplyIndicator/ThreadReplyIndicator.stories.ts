import ThreadReplyIndicator from './ThreadReplyIndicator.svelte';

export default {
  title: 'Threads/ThreadReplyIndicator',
  component: ThreadReplyIndicator,
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
    isClicked: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadReplyIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isClicked: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  isClicked: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  isClicked: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isVisible: true,
  isClicked: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isVisible: true,
  isClicked: true,
};