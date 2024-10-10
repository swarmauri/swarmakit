import React from 'react';
import CandlestickChart from './CandlestickChart';

export default {
  title: 'Charts/CandlestickChart',
  component: CandlestickChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CandlestickChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2023-10-02', open: 105, high: 115, low: 95, close: 100 },
    { date: '2023-10-03', open: 100, high: 120, low: 85, close: 115 },
  ],
  isLoading: false,
  zoomLevel: 1,
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

export const Zoomed = Template.bind({});
Zoomed.args = {
  ...Default.args,
  zoomLevel: 2,
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipData: { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  isHovered: true,
};