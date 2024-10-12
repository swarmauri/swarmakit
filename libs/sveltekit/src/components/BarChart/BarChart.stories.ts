import BarChart from './BarChart.svelte';
import type { ChartState } from './BarChart.svelte';

export default {
  title: 'Charts/BarChart',
  component: BarChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'stacked', 'grouped', 'hovered', 'clicked'],
    },
  },
};

const Template = (args: { state: ChartState }) => ({
  Component: BarChart,
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

export const Grouped = Template.bind({});
Grouped.args = {
  state: 'grouped',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};