import React from 'react';
import Treeviewlist from './Treeviewlist';

export default {
  title: 'Lists/Treeviewlist',
  component: Treeviewlist,
};

const Template = (args) => <Treeviewlist {...args} />;

export const Default = Template.bind({});
Default.args = {
  nodes: [
    { id: '1', label: 'Node 1', isExpanded: false, isSelected: false, children: [] },
    { id: '2', label: 'Node 2', isExpanded: false, isSelected: false, children: [] },
  ],
};

export const NodeExpanded = Template.bind({});
NodeExpanded.args = {
  nodes: [
    { id: '1', label: 'Node 1', isExpanded: true, isSelected: false, children: [
      { id: '1-1', label: 'Child Node 1', isExpanded: false, isSelected: false, children: [] },
    ] },
  ],
};

export const NodeCollapsed = Template.bind({});
NodeCollapsed.args = {
  nodes: [
    { id: '1', label: 'Node 1', isExpanded: false, isSelected: false, children: [
      { id: '1-1', label: 'Child Node 1', isExpanded: false, isSelected: false, children: [] },
    ] },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  nodes: [
    { id: '1', label: 'Node 1', isExpanded: false, isSelected: false, children: [] },
    { id: '2', label: 'Node 2', isExpanded: false, isSelected: false, children: [] },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  nodes: [
    { id: '1', label: 'Node 1', isExpanded: false, isSelected: true, children: [] },
    { id: '2', label: 'Node 2', isExpanded: false, isSelected: false, children: [] },
  ],
};