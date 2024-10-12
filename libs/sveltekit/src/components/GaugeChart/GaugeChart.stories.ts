import GaugeChart from './GaugeChart.svelte';
import type { GaugeChartState } from './GaugeChart.svelte';

export default {
  title: 'Charts/GaugeChart',
  component: GaugeChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'tooltipVisible', 'max', 'min'],
    },
  },
};

const Template = (args: { state: GaugeChartState }) => ({
  Component: GaugeChart,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
};

export const Max = Template.bind({});
Max.args = {
  state: 'max',
};

export const Min = Template.bind({});
Min.args = {
  state: 'min',
};