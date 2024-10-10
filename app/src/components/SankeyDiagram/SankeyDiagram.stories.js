import React from 'react';
import SankeyDiagram from './SankeyDiagram';

export default {
  title: 'Charts/SankeyDiagram',
  component: SankeyDiagram,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SankeyDiagram {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { source: 'Node A', target: 'Node B', value: 10 },
    { source: 'Node B', target: 'Node C', value: 5 },
    { source: 'Node A', target: 'Node C', value: 15 },
  ],
  isLoading: false,
  tooltipData: null,
  isHovered: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Rendered = Template.bind({});
Rendered.args = {
  ...Default.args,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  data: [],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipData: { source: 'Node A', target: 'Node B', value: 10 },
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  isHovered: true,
};