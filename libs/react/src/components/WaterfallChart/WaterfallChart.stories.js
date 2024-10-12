import React from 'react';
import WaterfallChart from './WaterfallChart';

export default {
  title: 'Charts/WaterfallChart',
  component: WaterfallChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <WaterfallChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { label: 'Start', value: 100 },
    { label: 'Increment', value: 50 },
    { label: 'Decrement', value: -30 },
    { label: 'End', value: 120 },
  ],
  isLoading: false,
  tooltipData: null,
  isStacked: false,
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
  tooltipData: { label: 'Current Value', value: 120 },
};

export const Stacked = Template.bind({});
Stacked.args = {
  ...Default.args,
  isStacked: true,
};