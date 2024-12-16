import React from 'react';
import { Meta, Story } from '@storybook/react';
import TreeviewList, { TreeviewListProps } from './TreeviewList';

export default {
  title: 'component/Lists/TreeviewList',
  component: TreeviewList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TreeviewListProps> = (args) => <TreeviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  nodes: [
    { label: 'Node 1' },
    {
      label: 'Node 2',
      children: [
        { label: 'Child 1' },
        { label: 'Child 2', children: [{ label: 'Grandchild 1' }] },
      ],
    },
    { label: 'Node 3' },
  ],
};

export const NodeExpanded = Template.bind({});
NodeExpanded.args = {
  ...Default.args,
};

export const NodeCollapsed = Template.bind({});
NodeCollapsed.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  nodes: [
    { label: 'Node 1' },
    {
      label: 'Node 2',
      children: [
        { label: 'Child 1', children: [{ label: 'Grandchild 1' }] },
        { label: 'Child 2' },
      ],
    },
    { label: 'Node 3' },
  ],
};