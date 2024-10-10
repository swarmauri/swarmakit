import React from 'react';
import BoxPlot from './BoxPlot';

export default {
  title: 'Charts/BoxPlot',
  component: BoxPlot,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <BoxPlot {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { min: 10, q1: 20, median: 30, q3: 40, max: 50 },
    { min: 15, q1: 25, median: 35, q3: 45, max: 55 },
  ],
  isLoading: false,
  tooltipData: null,
  isHovered: false,
  isClicked: false,
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
  isHovered: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  isClicked: true,
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipData: { min: 10, q1: 20, median: 30, q3: 40, max: 50 },
};