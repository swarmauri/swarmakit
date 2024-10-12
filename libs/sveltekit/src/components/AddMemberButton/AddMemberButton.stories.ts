import AddMemberButton from './AddMemberButton.svelte';

export default {
  title: 'Chat/AddMemberButton',
  component: AddMemberButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: AddMemberButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Add Member',
  disabled: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Add Member',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Add Member',
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'Add Member',
  disabled: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'Add Member',
  disabled: false,
};