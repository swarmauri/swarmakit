import React from 'react';
import { Meta, Story } from '@storybook/react';
import BoxPlot, { BoxPlotProps } from './BoxPlot';

export default {
  title: 'component/Charts/BoxPlot',
  component: BoxPlot,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BoxPlotProps> = (args) => <BoxPlot {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    { min: 1, q1: 2, median: 3, q3: 4, max: 5 },
    { min: 2, q1: 3, median: 4, q3: 5, max: 6 },
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
    { min: 1, q1: 2, median: 3, q3: 4, max: 5 },
    { min: 2, q1: 3, median: 4, q3: 5, max: 6 },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [
    { min: 1, q1: 2, median: 3, q3: 4, max: 5 },
    { min: 2, q1: 3, median: 4, q3: 5, max: 6 },
  ],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  data: [
    { min: 1, q1: 2, median: 3, q3: 4, max: 5 },
    { min: 2, q1: 3, median: 4, q3: 5, max: 6 },
  ],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [
    { min: 1, q1: 2, median: 3, q3: 4, max: 5 },
    { min: 2, q1: 3, median: 4, q3: 5, max: 6 },
  ],
};