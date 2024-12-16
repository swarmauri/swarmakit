import React from 'react';
import { Meta, Story } from '@storybook/react';
import GaugeChart, { GaugeChartProps } from './GaugeChart';

export default {
  title: 'component/Charts/GaugeChart',
  component: GaugeChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GaugeChartProps> = (args) => <GaugeChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  value: 50,
  maxValue: 100,
  minValue: 0,
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  value: 0,
  maxValue: 100,
  minValue: 0,
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  value: 50,
  maxValue: 100,
  minValue: 0,
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  value: 0,
  maxValue: 100,
  minValue: 0,
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  value: 50,
  maxValue: 100,
  minValue: 0,
};

export const Max = Template.bind({});
Max.args = {
  state: 'max',
  value: 100,
  maxValue: 100,
  minValue: 0,
};

export const Min = Template.bind({});
Min.args = {
  state: 'min',
  value: 0,
  maxValue: 100,
  minValue: 0,
};