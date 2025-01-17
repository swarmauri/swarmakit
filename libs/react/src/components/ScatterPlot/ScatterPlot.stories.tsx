import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScatterPlot, { ScatterPlotProps } from './ScatterPlot';

export default {
  title: 'component/Charts/ScatterPlot',
  component: ScatterPlot,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ScatterPlotProps> = (args) => <ScatterPlot {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  state: 'zoomed',
  data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
  data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  state: 'highlighted',
  data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
};

export const Clustered = Template.bind({});
Clustered.args = {
  state: 'clustered',
  data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
};