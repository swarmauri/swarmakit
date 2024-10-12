import LineChart from './LineChart.svelte';
import type { ChartState } from './LineChart.svelte';

export default {
  title: 'Charts/LineChart',
  component: LineChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'zoomed', 'tooltipVisible', 'highlighted'],
    },
  },
};

const Template = (args: { state: ChartState }) => ({
  Component: LineChart,
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

export const Highlighted = Template.bind({});
Highlighted.args = {
  state: 'highlighted',
};