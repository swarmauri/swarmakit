import AttachmentIcon from './AttachmentIcon.svelte';

export default {
  title: 'Chat/AttachmentIcon',
  component: AttachmentIcon,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: AttachmentIcon,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  disabled: false,
};
Hovered.parameters = {
  pseudo: { hover: true },
};

export const Clicked = Template.bind({});
Clicked.args = {
  disabled: false,
};
Clicked.parameters = {
  pseudo: { active: true },
};