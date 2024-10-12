import DonutChart from './DonutChart.svelte';
import type { DonutChartState } from './DonutChart.svelte';

export default {
  title: 'Charts/DonutChart',
  component: DonutChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'hovered', 'clicked', 'tooltipVisible', 'exploded'],
    },
  },
};

const Template = (args: { state: DonutChartState }) => ({
  Component: DonutChart,
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

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
};

export const Exploded = Template.bind({});
Exploded.args = {
  state: 'exploded',
};