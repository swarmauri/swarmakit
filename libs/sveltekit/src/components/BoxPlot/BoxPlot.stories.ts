import BoxPlot from './BoxPlot.svelte';
import type { BoxPlotState } from './BoxPlot.svelte';

export default {
  title: 'Charts/BoxPlot',
  component: BoxPlot,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'hovered', 'clicked', 'tooltipVisible'],
    },
  },
};

const Template = (args: { state: BoxPlotState }) => ({
  Component: BoxPlot,
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