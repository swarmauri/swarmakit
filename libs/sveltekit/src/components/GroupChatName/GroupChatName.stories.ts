import GroupChatName from './GroupChatName.svelte';

export default {
  title: 'Chat/GroupChatName',
  component: GroupChatName,
  argTypes: {
    name: { control: 'text' },
    state: { 
      control: { type: 'select', options: ['displayed', 'hidden', 'edited'] }
    },
  },
};

const Template = (args) => ({
  Component: GroupChatName,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  name: 'Group Chat',
  state: 'displayed',
};

export const Displayed = Template.bind({});
Displayed.args = {
  name: 'Group Chat',
  state: 'displayed',
};

export const Hidden = Template.bind({});
Hidden.args = {
  name: 'Group Chat',
  state: 'hidden',
};

export const Edited = Template.bind({});
Edited.args = {
  name: 'Edited Group Chat',
  state: 'edited',
};