import PieChart from './PieChart.svelte';
import type { ChartState } from './PieChart.svelte';

export default {
  title: 'Charts/PieChart',
  component: PieChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'hovered', 'clicked', 'donut', 'exploded'],
    },
  },
};

const Template = (args: { state: ChartState }) => ({
  Component: PieChart,
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

export const Donut = Template.bind({});
Donut.args = {
  state: 'donut',
};

export const Exploded = Template.bind({});
Exploded.args = {
  state: 'exploded',
};