import GroupAdminBadge from './GroupAdminBadge.svelte';

export default {
  title: 'Chat/GroupAdminBadge',
  component: GroupAdminBadge,
  argTypes: {
    label: { control: 'text' },
    visible: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: GroupAdminBadge,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Admin',
  visible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  label: 'Admin',
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  label: 'Admin',
  visible: false,
};