import React from 'react';
import Heatmap from './Heatmap';

export default {
  title: 'Charts/Heatmap',
  component: Heatmap,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Heatmap {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  isLoading: false,
  zoomLevel: 1,
  tooltipData: null,
  hoveredCell: null,
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
  tooltipData: { x: 1, y: 1, value: 5 },
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  hoveredCell: { x: 2, y: 2 },
};