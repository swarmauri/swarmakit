import GroupedList from './GroupedList.vue';

export default {
  title: 'Lists/GroupedList',
  component: GroupedList,
  tags: ['autodocs'],
  argTypes: {
    groups: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { GroupedList },
  setup() {
    return { args };
  },
  template: '<GroupedList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  groups: [
    { title: 'Group 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Group 2', items: ['Item A', 'Item B', 'Item C'] },
  ],
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  ...Default.args,
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  ...Default.args,
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  ...Default.args,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};