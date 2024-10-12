import MessageOptionsMenu from './MessageOptionsMenu.svelte';

export default {
  title: 'Chat/MessageOptionsMenu',
  component: MessageOptionsMenu,
  argTypes: {
    isVisible: { control: 'boolean' },
    isClicked: { control: 'boolean' }
  },
};

const Template = (args) => ({
  Component: MessageOptionsMenu,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
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
};

export const Clicked = Template.bind({});
Clicked.args = {
  isVisible: true,
  isClicked: true,
};