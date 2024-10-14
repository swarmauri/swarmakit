import React from 'react';
import Histogram from './Histogram';

export default {
  title: 'Charts/Histogram',
  component: Histogram,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [10, 20, 30, 40, 50],
  isLoading: false,
  zoomLevel: 1,
  tooltipData: null,
  hoveredBar: null,
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
  tooltipData: { index: 2, value: 30 },
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  hoveredBar: 3,
};