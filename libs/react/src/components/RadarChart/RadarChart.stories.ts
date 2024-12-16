import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadarChart, { RadarChartProps } from './RadarChart';

export default {
  title: 'component/Charts/RadarChart',
  component: RadarChart,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RadarChartProps> = (args) => <RadarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ axis: 'A', value: 60 }, { axis: 'B', value: 90 }, { axis: 'C', value: 75 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ axis: 'A', value: 60 }, { axis: 'B', value: 90 }, { axis: 'C', value: 75 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [{ axis: 'A', value: 60 }, { axis: 'B', value: 90 }, { axis: 'C', value: 75 }],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  data: [{ axis: 'A', value: 60 }, { axis: 'B', value: 90 }, { axis: 'C', value: 75 }],
};