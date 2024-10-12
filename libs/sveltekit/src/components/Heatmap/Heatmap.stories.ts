import Heatmap from './Heatmap.svelte';
import type { HeatmapState } from './Heatmap.svelte';

export default {
  title: 'Charts/Heatmap',
  component: Heatmap,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'zoomed', 'tooltipVisible', 'hovered'],
    },
  },
};

const Template = (args: { state: HeatmapState }) => ({
  Component: Heatmap,
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