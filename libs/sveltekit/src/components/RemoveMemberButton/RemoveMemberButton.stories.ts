import RemoveMemberButton from './RemoveMemberButton.svelte';

export default {
  title: 'Chat/RemoveMemberButton',
  component: RemoveMemberButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: RemoveMemberButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Remove Member',
  disabled: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Remove Member',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Remove Member',
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'Remove Member',
  disabled: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'Remove Member',
  disabled: false,
};