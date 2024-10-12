import SendButton from './SendButton.svelte';

export default {
  title: 'Chat/SendButton',
  component: SendButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: SendButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Send',
  disabled: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Send',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Send',
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'Send',
  disabled: false,
};
Hovered.parameters = {
  pseudo: { hover: true },
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'Send',
  disabled: false,
};
Clicked.parameters = {
  pseudo: { active: true },
};