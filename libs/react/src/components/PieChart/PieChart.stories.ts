import React from 'react';
import { Meta, Story } from '@storybook/react';
import PieChart, { PieChartProps } from './PieChart';

export default {
  title: 'component/Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PieChartProps> = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 50 }, { category: 'C', value: 20 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 50 }, { category: 'C', value: 20 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 50 }, { category: 'C', value: 20 }],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 50 }, { category: 'C', value: 20 }],
};

export const Donut = Template.bind({});
Donut.args = {
  state: 'donut',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 50 }, { category: 'C', value: 20 }],
};

export const Exploded = Template.bind({});
Exploded.args = {
  state: 'exploded',
  data: [{ category: 'A', value: 30 }, { category: 'B', value: 50 }, { category: 'C', value: 20 }],
};