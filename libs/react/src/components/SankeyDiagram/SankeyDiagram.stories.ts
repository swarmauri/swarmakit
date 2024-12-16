import React from 'react';
import { Meta, Story } from '@storybook/react';
import SankeyDiagram, { SankeyDiagramProps } from './SankeyDiagram';

export default {
  title: 'component/Charts/SankeyDiagram',
  component: SankeyDiagram,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SankeyDiagramProps> = (args) => <SankeyDiagram {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    { source: 'A', target: 'B', value: 10 },
    { source: 'B', target: 'C', value: 20 },
    { source: 'A', target: 'C', value: 5 },
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
    { source: 'A', target: 'B', value: 10 },
    { source: 'B', target: 'C', value: 20 },
    { source: 'A', target: 'C', value: 5 },
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
    { source: 'A', target: 'B', value: 10 },
    { source: 'B', target: 'C', value: 20 },
    { source: 'A', target: 'C', value: 5 },
  ],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [
    { source: 'A', target: 'B', value: 10 },
    { source: 'B', target: 'C', value: 20 },
    { source: 'A', target: 'C', value: 5 },
  ],
};