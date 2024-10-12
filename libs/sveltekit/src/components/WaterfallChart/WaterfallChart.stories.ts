import WaterfallChart from './WaterfallChart.svelte';
import type { WaterfallChartState } from './WaterfallChart.svelte';

export default {
  title: 'Charts/WaterfallChart',
  component: WaterfallChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'tooltipVisible', 'stacked'],
    },
  },
};

const Template = (args: { state: WaterfallChartState }) => ({
  Component: WaterfallChart,
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

export const Stacked = Template.bind({});
Stacked.args = {
  state: 'stacked',
};