import React from 'react';
import PieChart from './PieChart';

export default {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ category: 'A', value: 40 }, { category: 'B', value: 30 }, { category: 'C', value: 30 }],
  isLoading: false,
  isDonut: false,
  explodedSlice: null,
  hoveredSlice: null,
  clickedSlice: null,
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

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  hoveredSlice: { category: 'B', value: 30 },
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  clickedSlice: { category: 'C', value: 30 },
};

export const Donut = Template.bind({});
Donut.args = {
  ...Default.args,
  isDonut: true,
};

export const Exploded = Template.bind({});
Exploded.args = {
  ...Default.args,
  explodedSlice: { category: 'A', value: 40 },
};