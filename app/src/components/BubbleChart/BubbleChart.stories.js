import React from 'react';
import BubbleChart from './BubbleChart';

export default {
  title: 'Charts/BubbleChart',
  component: BubbleChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <BubbleChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { x: 10, y: 20, size: 30 },
    { x: 40, y: 50, size: 60 },
    { x: 70, y: 80, size: 90 },
  ],
  isLoading: false,
  zoomLevel: 1,
  tooltipData: null,
  highlightedBubbles: [],
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
  tooltipData: { x: 40, y: 50, size: 60 },
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  ...Default.args,
  highlightedBubbles: [{ x: 70, y: 80, size: 90 }],
};