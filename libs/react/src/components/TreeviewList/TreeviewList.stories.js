import React from 'react';
import TreeviewList from './TreeviewList';

export default {
  title: 'Lists/TreeviewList',
  component: TreeviewList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TreeviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  nodes: [
    { id: 1, label: 'Node 1', children: [{ id: 3, label: 'Node 1.1' }] },
    { id: 2, label: 'Node 2', children: [{ id: 4, label: 'Node 2.1' }] },
  ],
};

export const NodeExpanded = Template.bind({});
NodeExpanded.args = {
  nodes: [
    { id: 1, label: 'Node 1', children: [{ id: 3, label: 'Node 1.1' }] },
    { id: 2, label: 'Node 2', children: [{ id: 4, label: 'Node 2.1' }] },
  ],
};

export const NodeCollapsed = Template.bind({});
NodeCollapsed.args = {
  nodes: [
    { id: 1, label: 'Node 1', children: [{ id: 3, label: 'Node 1.1' }] },
    { id: 2, label: 'Node 2', children: [{ id: 4, label: 'Node 2.1' }] },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  nodes: [
    { id: 1, label: 'Node 1', children: [{ id: 3, label: 'Node 1.1' }] },
    { id: 2, label: 'Node 2', children: [{ id: 4, label: 'Node 2.1' }] },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  nodes: [
    { id: 1, label: 'Node 1', children: [{ id: 3, label: 'Node 1.1' }] },
    { id: 2, label: 'Node 2', children: [{ id: 4, label: 'Node 2.1' }] },
  ],
};