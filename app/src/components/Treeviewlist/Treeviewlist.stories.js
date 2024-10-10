import React from 'react';
import Treeviewlist from './Treeviewlist';

export default {
  title: 'Lists/Treeviewlist',
  component: Treeviewlist,
};

const Template = (args) => <Treeviewlist {...args} />;

const treeData = [
  {
    id: '1',
    label: 'Node 1',
    children: [
      { id: '1-1', label: 'Node 1.1' },
      { id: '1-2', label: 'Node 1.2' },
    ],
  },
  {
    id: '2',
    label: 'Node 2',
  },
];

export const Default = Template.bind({});
Default.args = {
  nodes: treeData,
};

export const NodeExpanded = Template.bind({});
NodeExpanded.args = {
  nodes: [
    {
      id: '1',
      label: 'Node 1',
      children: [
        { id: '1-1', label: 'Node 1.1' },
        { id: '1-2', label: 'Node 1.2' },
      ],
    },
  ],
};

export const NodeCollapsed = Template.bind({});
NodeCollapsed.args = {
  nodes: [
    {
      id: '1',
      label: 'Node 1',
      children: [
        { id: '1-1', label: 'Node 1.1' },
        { id: '1-2', label: 'Node 1.2' },
      ],
    },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  nodes: treeData,
};

export const Selected = Template.bind({});
Selected.args = {
  nodes: treeData,
};