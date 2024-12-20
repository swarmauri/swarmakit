import React from 'react';
import { Meta, Story } from '@storybook/react';
import WaterfallChart, { WaterfallChartProps } from './WaterfallChart';

export default {
  title: 'component/Charts/WaterfallChart',
  component: WaterfallChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<WaterfallChartProps> = (args) => <WaterfallChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    { label: 'Start', value: 100 },
    { label: 'Increase', value: 150 },
    { label: 'Decrease', value: 50 },
    { label: 'End', value: 200 },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [
    { label: 'Start', value: 100 },
    { label: 'Increase', value: 150 },
    { label: 'Decrease', value: 50 },
    { label: 'End', value: 200 },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [
    { label: 'Start', value: 100 },
    { label: 'Increase', value: 150 },
    { label: 'Decrease', value: 50 },
    { label: 'End', value: 200 },
  ],
};

export const Stacked = Template.bind({});
Stacked.args = {
  state: 'stacked',
  data: [
    { label: 'Start', value: 100 },
    { label: 'Increase', value: 150 },
    { label: 'Decrease', value: 50 },
    { label: 'End', value: 200 },
  ],
};