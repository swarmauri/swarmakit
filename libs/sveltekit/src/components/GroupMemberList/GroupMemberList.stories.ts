import GroupMemberList from './GroupMemberList.svelte';

export default {
  title: 'Chat/GroupMemberList',
  component: GroupMemberList,
  argTypes: {
    members: { control: 'object' },
    expanded: { control: 'boolean' },
    onToggle: { action: 'toggle' },
  },
};

const Template = (args) => ({
  Component: GroupMemberList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  members: [],
  expanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  members: [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ],
  expanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  members: [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ],
  expanded: false,
};

export const Populated = Template.bind({});
Populated.args = {
  members: [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
  ],
  expanded: true,
};

export const Empty = Template.bind({});
Empty.args = {
  members: [],
  expanded: true,
};