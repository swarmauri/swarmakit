import ScrollButton from './ScrollButton.svelte';

export default {
  title: 'Chat/ScrollButton',
  component: ScrollButton,
  argTypes: {
    isVisible: { control: 'boolean' },
    isHovered: { control: 'boolean' },
    isClicked: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ScrollButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isHovered: false,
  isClicked: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  isHovered: false,
  isClicked: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isVisible: true,
  isHovered: true,
  isClicked: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isVisible: true,
  isHovered: false,
  isClicked: true,
};