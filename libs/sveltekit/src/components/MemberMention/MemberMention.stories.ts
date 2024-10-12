import MemberMention from './MemberMention.svelte';

export default {
  title: 'Chat/MemberMention',
  component: MemberMention,
  argTypes: {
    visible: { control: 'boolean' },
    clicked: { control: 'boolean' },
    memberName: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: MemberMention,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  visible: true,
  clicked: false,
  memberName: 'Member',
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
  clicked: false,
  memberName: 'Member',
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
  clicked: false,
  memberName: 'Member',
};

export const Clicked = Template.bind({});
Clicked.args = {
  visible: true,
  clicked: true,
  memberName: 'Member',
};