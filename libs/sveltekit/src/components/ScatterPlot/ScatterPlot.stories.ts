import ScatterPlot from './ScatterPlot.svelte';
import type { PlotState } from './ScatterPlot.svelte';

export default {
  title: 'Charts/ScatterPlot',
  component: ScatterPlot,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'zoomed', 'tooltipVisible', 'highlighted', 'clustered'],
    },
  },
};

const Template = (args: { state: PlotState }) => ({
  Component: ScatterPlot,
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

export const Clustered = Template.bind({});
Clustered.args = {
  state: 'clustered',
};