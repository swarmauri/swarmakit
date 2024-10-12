import RadarChart from './RadarChart.svelte';
import type { ChartState } from './RadarChart.svelte';

export default {
  title: 'Charts/RadarChart',
  component: RadarChart,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'hovered', 'clicked'],
    },
  },
};

const Template = (args: { state: ChartState }) => ({
  Component: RadarChart,
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