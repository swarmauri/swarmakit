import ThreadMessageOptionsMenu from './ThreadMessageOptionsMenu.svelte';

export default {
  title: 'Threads/ThreadMessageOptionsMenu',
  component: ThreadMessageOptionsMenu,
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadMessageOptionsMenu,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isVisible: true,
};