import React from 'react';
import { Meta, Story } from '@storybook/react';
import Histogram, { HistogramProps } from './Histogram';

export default {
  title: 'component/Charts/Histogram',
  component: Histogram,
  tags: ['autodocs'],
} as Meta;

const Template: Story<HistogramProps> = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [10, 20, 30, 40, 50],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [10, 20, 30, 40, 50],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  state: 'zoomed',
  data: [10, 20, 30, 40, 50],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [10, 20, 30, 40, 50],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [10, 20, 30, 40, 50],
};