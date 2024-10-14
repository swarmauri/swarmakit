import React from 'react';
import TreeMap from './TreeMap';

export default {
  title: 'Charts/TreeMap',
  component: TreeMap,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <TreeMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { label: 'Category A', value: 30 },
    { label: 'Category B', value: 70 },
    { label: 'Category C', value: 50 },
  ],
  isLoading: false,
  tooltipData: null,
  isHovered: false,
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

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  ...Default.args,
  tooltipData: { label: 'Category A', value: 30 },
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  isHovered: true,
};