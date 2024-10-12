import TreeviewList from './TreeviewList.svelte';
import type { TreeNode } from './TreeviewList.svelte';

export default {
  title: 'Lists/TreeviewList',
  component: TreeviewList,
  argTypes: {
    nodes: { control: 'object' },
    selectedNodeId: { control: 'number' },
    onNodeSelect: { action: 'onNodeSelect' },
  },
};

const Template = (args) => ({
  Component: TreeviewList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  nodes: [
    { id: 1, name: 'Node 1', children: [{ id: 4, name: 'Child 1' }, { id: 5, name: 'Child 2' }] },
    { id: 2, name: 'Node 2', children: [{ id: 6, name: 'Child 3' }] },
    { id: 3, name: 'Node 3' },
  ],
  selectedNodeId: 1,
  onNodeSelect: (node: TreeNode) => console.log('Selected node', node),
};

export const NodeExpanded = Template.bind({});
NodeExpanded.args = {
  nodes: [
    { id: 1, name: 'Node 1', expanded: true, children: [{ id: 4, name: 'Child 1' }, { id: 5, name: 'Child 2' }] },
    { id: 2, name: 'Node 2', children: [{ id: 6, name: 'Child 3' }] },
    { id: 3, name: 'Node 3' },
  ],
  selectedNodeId: 1,
};

export const NodeCollapsed = Template.bind({});
NodeCollapsed.args = {
  nodes: [
    { id: 1, name: 'Node 1', children: [{ id: 4, name: 'Child 1' }, { id: 5, name: 'Child 2' }] },
    { id: 2, name: 'Node 2', children: [{ id: 6, name: 'Child 3' }] },
    { id: 3, name: 'Node 3' },
  ],
  selectedNodeId: 1,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selectedNodeId: 2,
};