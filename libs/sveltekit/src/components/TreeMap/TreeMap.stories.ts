import TreeMap from './TreeMap.svelte';
import type { TreeMapState } from './TreeMap.svelte';

export default {
  title: 'Charts/TreeMap',
  component: TreeMap,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'tooltipVisible', 'hovered'],
    },
  },
};

const Template = (args: { state: TreeMapState }) => ({
  Component: TreeMap,
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

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};