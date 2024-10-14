import React from 'react';
import GaugeChart from './GaugeChart';

export default {
  title: 'Charts/GaugeChart',
  component: GaugeChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GaugeChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
  min: 0,
  isLoading: false,
  tooltipData: null,
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
  value: null,
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipData: { label: 'Current Value', value: 50 },
};

export const Max = Template.bind({});
Max.args = {
  ...Default.args,
  value: 100,
};

export const Min = Template.bind({});
Min.args = {
  ...Default.args,
  value: 0,
};