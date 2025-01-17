import React from 'react';
import { Meta, Story } from '@storybook/react';
import DonutChart, { DonutChartProps } from './DonutChart';

export default {
  title: 'component/Charts/DonutChart',
  component: DonutChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DonutChartProps> = (args) => <DonutChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 70 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 70 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 70 }],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 70 }],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 70 }],
};

export const Exploded = Template.bind({});
Exploded.args = {
  state: 'exploded',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 70 }],
};