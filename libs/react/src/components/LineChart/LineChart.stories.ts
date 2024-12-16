import React from 'react';
import { Meta, Story } from '@storybook/react';
import LineChart, { LineChartProps } from './LineChart';

export default {
  title: 'component/Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  state: 'zoomed',
  data: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  state: 'highlighted',
  data: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
};