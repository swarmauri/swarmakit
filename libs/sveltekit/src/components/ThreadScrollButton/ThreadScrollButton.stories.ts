import ThreadScrollButton from './ThreadScrollButton.svelte';

export default {
  title: 'Threads/ThreadScrollButton',
  component: ThreadScrollButton,
  argTypes: {
    label: {
      control: 'text',
    },
    isVisible: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadScrollButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Scroll',
  isVisible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  label: 'Scroll',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  label: 'Scroll',
  isVisible: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'Scroll',
  isVisible: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'Scroll',
  isVisible: true,
};