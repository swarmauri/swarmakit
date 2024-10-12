import GroupMemberList from './GroupMemberList.vue';

export default {
  title: 'Chat/GroupMemberList',
  component: GroupMemberList,
  tags: ['autodocs'],
  argTypes: {
    members: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { GroupMemberList },
  setup() {
    return { args };
  },
  template: `
    <GroupMemberList v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  members: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
};

export const Expanded = Template.bind({});
Expanded.args = {
  members: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  members: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
};

export const Populated = Template.bind({});
Populated.args = {
  members: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }],
};

export const Empty = Template.bind({});
Empty.args = {
  members: [],
};