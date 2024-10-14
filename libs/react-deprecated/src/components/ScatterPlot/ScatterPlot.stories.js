import React from 'react';
import ScatterPlot from './ScatterPlot';

export default {
  title: 'Charts/ScatterPlot',
  component: ScatterPlot,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <ScatterPlot {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ x: 5, y: 20 }, { x: 10, y: 15 }, { x: 15, y: 10 }],
  isLoading: false,
  zoomLevel: 1,
  tooltipPoint: null,
  highlightedPoints: [],
  clustered: false,
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

export const Zoomed = Template.bind({});
Zoomed.args = {
  ...Default.args,
  zoomLevel: 2,
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipPoint: { x: 10, y: 15 },
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  ...Default.args,
  highlightedPoints: [{ x: 5, y: 20 }],
};

export const Clustered = Template.bind({});
Clustered.args = {
  ...Default.args,
  clustered: true,
};