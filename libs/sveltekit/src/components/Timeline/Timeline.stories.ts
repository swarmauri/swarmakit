import Timeline from './Timeline.svelte';
import type { TimelineState } from './Timeline.svelte';

export default {
  title: 'UI Layout/Timeline',
  component: Timeline,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'populated', 'empty'],
    },
    events: { control: 'object' },
  },
};

const Template = (args: { state: TimelineState; events: Array<{ date: string; description: string }> }) => ({
  Component: Timeline,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  events: [{ date: '2023-10-01', description: 'Event 1' }, { date: '2023-10-02', description: 'Event 2' }],
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  events: [{ date: '2023-10-01', description: 'Visible Event 1' }, { date: '2023-10-02', description: 'Visible Event 2' }],
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  events: [{ date: '2023-10-01', description: 'Hidden Event 1' }, { date: '2023-10-02', description: 'Hidden Event 2' }],
};

export const Populated = Template.bind({});
Populated.args = {
  state: 'populated',
  events: [{ date: '2023-10-01', description: 'Populated Event 1' }, { date: '2023-10-02', description: 'Populated Event 2' }],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  events: [],
};