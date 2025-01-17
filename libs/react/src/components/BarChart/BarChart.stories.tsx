import React from 'react';
import { Meta, Story } from '@storybook/react';
import BarChart, { BarChartProps } from './BarChart';

export default {
  title: 'component/Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BarChartProps> = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Stacked = Template.bind({});
Stacked.args = {
  state: 'stacked',
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
};

export const Grouped = Template.bind({});
Grouped.args = {
  state: 'grouped',
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
};