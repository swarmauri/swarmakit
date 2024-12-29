import React from 'react';
import { Meta, Story } from '@storybook/react';
import BubbleChart, { BubbleChartProps } from './BubbleChart';

export default {
  title: 'component/Charts/BubbleChart',
  component: BubbleChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BubbleChartProps> = (args) => <BubbleChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ x: 30, y: 40, radius: 10 }, { x: 50, y: 60, radius: 20 }, { x: 70, y: 80, radius: 15 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ x: 30, y: 40, radius: 10 }, { x: 50, y: 60, radius: 20 }, { x: 70, y: 80, radius: 15 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  state: 'zoomed',
  data: [{ x: 30, y: 40, radius: 10 }, { x: 50, y: 60, radius: 20 }, { x: 70, y: 80, radius: 15 }],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [{ x: 30, y: 40, radius: 10 }, { x: 50, y: 60, radius: 20 }, { x: 70, y: 80, radius: 15 }],
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  state: 'highlighted',
  data: [{ x: 30, y: 40, radius: 10 }, { x: 50, y: 60, radius: 20 }, { x: 70, y: 80, radius: 15 }],
};