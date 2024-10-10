import React from 'react';
import AreaChart from './AreaChart';

export default {
  title: 'Charts/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }],
  isLoading: false,
  stacked: false,
  hoveredArea: null,
  clickedPoint: null,
  tooltipPoint: null,
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

export const Stacked = Template.bind({});
Stacked.args = {
  ...Default.args,
  stacked: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  hoveredArea: { x: 2, y: 20 },
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  clickedPoint: { x: 3, y: 30 },
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipPoint: { x: 1, y: 10 },
};