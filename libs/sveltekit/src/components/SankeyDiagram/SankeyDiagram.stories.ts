import SankeyDiagram from './SankeyDiagram.svelte';
import type { SankeyDiagramState } from './SankeyDiagram.svelte';

export default {
  title: 'Charts/SankeyDiagram',
  component: SankeyDiagram,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'tooltipVisible', 'hovered'],
    },
  },
};

const Template = (args: { state: SankeyDiagramState }) => ({
  Component: SankeyDiagram,
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