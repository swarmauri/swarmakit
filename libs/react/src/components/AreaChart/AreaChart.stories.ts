import React from 'react';
import { Meta, Story } from '@storybook/react';
import AreaChart, { AreaChartProps } from './AreaChart';

export default {
  title: 'component/Charts/AreaChart',
  component: AreaChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AreaChartProps> = (args) => <AreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Stacked = Template.bind({});
Stacked.args = {
  state: 'stacked',
  data: [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  data: [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }],
};