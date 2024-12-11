import React from 'react';
import { Meta, Story } from '@storybook/react';
import TreeMap, { TreeMapProps } from './TreeMap';

export default {
  title: 'component/Charts/TreeMap',
  component: TreeMap,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TreeMapProps> = (args) => <TreeMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    { name: 'Category A', value: 50 },
    { name: 'Category B', value: 30 },
    { name: 'Category C', value: 20 },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [
    { name: 'Category A', value: 50 },
    { name: 'Category B', value: 30 },
    { name: 'Category C', value: 20 },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [
    { name: 'Category A', value: 50 },
    { name: 'Category B', value: 30 },
    { name: 'Category C', value: 20 },
  ],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [
    { name: 'Category A', value: 50 },
    { name: 'Category B', value: 30 },
    { name: 'Category C', value: 20 },
  ],
};