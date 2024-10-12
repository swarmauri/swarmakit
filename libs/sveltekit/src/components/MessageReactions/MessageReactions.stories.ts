import MessageReactions from './MessageReactions.svelte';

export default {
  title: 'Chat/MessageReactions',
  component: MessageReactions,
  argTypes: {
    isAvailable: { control: 'boolean' },
    isHovered: { control: 'boolean' },
    isClicked: { control: 'boolean' }
  },
};

const Template = (args) => ({
  Component: MessageReactions,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isAvailable: true,
  isHovered: false,
  isClicked: false,
};

export const Available = Template.bind({});
Available.args = {
  isAvailable: true,
  isHovered: false,
  isClicked: false,
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  isAvailable: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isAvailable: true,
  isHovered: true,
  isClicked: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isAvailable: true,
  isHovered: false,
  isClicked: true,
};