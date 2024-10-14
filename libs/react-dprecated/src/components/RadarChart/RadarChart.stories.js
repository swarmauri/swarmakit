import React from 'react';
import RadarChart from './RadarChart';

export default {
  title: 'Charts/RadarChart',
  component: RadarChart,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <RadarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ axis: 'A', value: 10 }, { axis: 'B', value: 20 }, { axis: 'C', value: 30 }],
  isLoading: false,
  hoveredArea: null,
  clickedPoint: null,
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
  hoveredArea: { axis: 'B', value: 20 },
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  clickedPoint: { axis: 'C', value: 30 },
};