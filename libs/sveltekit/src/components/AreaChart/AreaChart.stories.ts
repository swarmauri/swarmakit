import AreaChart from './AreaChart.svelte';
import type { ChartState } from './AreaChart.svelte';

export default {
  title: 'Charts/AreaChart',
  component: AreaChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'stacked', 'hovered', 'clicked', 'tooltipVisible'],
    },
  },
};

const Template = (args: { state: ChartState }) => ({
  Component: AreaChart,
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

export const Stacked = Template.bind({});
Stacked.args = {
  state: 'stacked',
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