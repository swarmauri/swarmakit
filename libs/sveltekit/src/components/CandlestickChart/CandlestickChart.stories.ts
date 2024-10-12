import CandlestickChart from './CandlestickChart.svelte';
import type { CandlestickChartState } from './CandlestickChart.svelte';

export default {
  title: 'Charts/CandlestickChart',
  component: CandlestickChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'zoomed', 'tooltipVisible', 'hovered'],
    },
  },
};

const Template = (args: { state: CandlestickChartState }) => ({
  Component: CandlestickChart,
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

export const Zoomed = Template.bind({});
Zoomed.args = {
  state: 'zoomed',
};

export const TooltipVisible = Template.bind({});
TooltipVisible.args = {
  state: 'tooltipVisible',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};