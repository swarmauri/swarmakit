import React from 'react';
import DonutChart from './DonutChart';

export default {
  title: 'Charts/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <DonutChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { label: 'A', value: 30 },
    { label: 'B', value: 70 },
  ],
  isLoading: false,
  hoveredSlice: null,
  clickedSlice: null,
  tooltipData: null,
  explodedSlice: null,
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

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  hoveredSlice: 1,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  clickedSlice: 0,
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipData: { label: 'B', value: 70 },
};

export const Exploded = Template.bind({});
Exploded.args = {
  ...Default.args,
  explodedSlice: 1,
};