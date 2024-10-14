import React from 'react';
import BarChart from './BarChart';

export default {
  title: 'Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'C', value: 30 }],
  isLoading: false,
  isStacked: false,
  isGrouped: false,
  hoveredBar: null,
  clickedBar: null,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Rendered = Template.bind({});
Rendered.args = {
  ...Default.args,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  data: [],
};

export const Stacked = Template.bind({});
Stacked.args = {
  ...Default.args,
  isStacked: true,
};

export const Grouped = Template.bind({});
Grouped.args = {
  ...Default.args,
  isGrouped: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  hoveredBar: { category: 'B', value: 20 },
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  clickedBar: { category: 'C', value: 30 },
};