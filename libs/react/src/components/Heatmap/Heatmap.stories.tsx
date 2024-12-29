import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heatmap, { HeatmapProps } from './Heatmap';

export default {
  title: 'component/Charts/Heatmap',
  component: Heatmap,
  tags: ['autodocs'],
} as Meta;

const Template: Story<HeatmapProps> = (args) => <Heatmap {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  data: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};