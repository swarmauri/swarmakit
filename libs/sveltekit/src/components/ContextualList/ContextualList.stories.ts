import ContextualList from './ContextualList.svelte';
import type { ListState } from './ContextualList.svelte';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: ContextualList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: ListState.Default,
  items: [
    { label: 'Action 1', action: () => alert('Action 1 triggered') },
    { label: 'Action 2', action: () => alert('Action 2 triggered') },
  ],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  state: ListState.ActionTriggered,
  items: [
    { label: 'Action 1', action: () => alert('Action 1 triggered') },
    { label: 'Action 2', action: () => alert('Action 2 triggered') },
  ],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  state: ListState.Dismissed,
  items: [
    { label: 'Action 1', action: () => alert('Action 1 triggered') },
    { label: 'Action 2', action: () => alert('Action 2 triggered') },
  ],
};