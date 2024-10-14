import React from 'react';
import LineChart from './LineChart';

export default {
  title: 'Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }],
  isLoading: false,
  zoomLevel: 1,
  tooltipVisible: false,
  highlightedPoint: null,
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
  tooltipVisible: true,
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  ...Default.args,
  highlightedPoint: { x: 2, y: 3 },
};