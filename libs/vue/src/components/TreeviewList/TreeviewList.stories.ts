import TreeviewList from './TreeviewList.vue';

export default {
  title: 'Lists/TreeviewList',
  component: TreeviewList,
  tags: ['autodocs'],
  argTypes: {
    nodes: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { TreeviewList },
  setup() {
    return { args };
  },
  template: '<TreeviewList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      id: 1,
      label: 'Node 1',
      expanded: false,
      children: [
        { id: 3, label: 'Child 1-1' },
        { id: 4, label: 'Child 1-2' },
      ],
    },
    { id: 2, label: 'Node 2' },
  ],
};

export const NodeExpanded = Template.bind({});
NodeExpanded.args = {
  nodes: [
    {
      id: 1,
      label: 'Node 1',
      expanded: true,
      children: [
        { id: 3, label: 'Child 1-1' },
        { id: 4, label: 'Child 1-2' },
      ],
    },
    { id: 2, label: 'Node 2' },
  ],
};

export const NodeCollapsed = Template.bind({});
NodeCollapsed.args = {
  nodes: [
    {
      id: 1,
      label: 'Node 1',
      expanded: false,
      children: [
        { id: 3, label: 'Child 1-1' },
        { id: 4, label: 'Child 1-2' },
      ],
    },
    { id: 2, label: 'Node 2' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  nodes: [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2', expanded: false },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  nodes: [
    {
      id: 1,
      label: 'Node 1',
      selected: true,
      children: [
        { id: 3, label: 'Child 1-1', selected: true },
        { id: 4, label: 'Child 1-2' },
      ],
    },
    { id: 2, label: 'Node 2' },
  ],
};