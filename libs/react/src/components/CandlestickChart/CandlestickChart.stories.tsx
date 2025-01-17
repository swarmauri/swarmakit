import React from 'react';
import { Meta, Story } from '@storybook/react';
import CandlestickChart, { CandlestickChartProps } from './CandlestickChart';

export default {
  title: 'component/Charts/CandlestickChart',
  component: CandlestickChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CandlestickChartProps> = (args) => <CandlestickChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2023-10-02', open: 105, high: 115, low: 95, close: 100 },
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
    { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2023-10-02', open: 105, high: 115, low: 95, close: 100 },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  state: 'zoomed',
  data: [
    { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2023-10-02', open: 105, high: 115, low: 95, close: 100 },
  ],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [
    { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2023-10-02', open: 105, high: 115, low: 95, close: 100 },
  ],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [
    { date: '2023-10-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2023-10-02', open: 105, high: 115, low: 95, close: 100 },
  ],
};