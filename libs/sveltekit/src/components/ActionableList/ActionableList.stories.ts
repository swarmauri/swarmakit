import ActionableList from './ActionableList.svelte';
import type { ActionableListState } from './ActionableList.svelte';

export default {
  title: 'Lists/ActionableList',
  component: ActionableList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ActionableListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: ActionableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: ActionableListState.Hover,
  items: [
    { title: 'Item 1', action: 'Action 1', disabled: false },
    { title: 'Item 2', action: 'Action 2', disabled: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: ActionableListState.Hover,
  items: [
    { title: 'Item 1', action: 'Action 1', disabled: false },
    { title: 'Item 2', action: 'Action 2', disabled: false },
  ],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  state: ActionableListState.ActionTriggered,
  items: [
    { title: 'Item 1', action: 'Action 1', disabled: false },
    { title: 'Item 2', action: 'Action 2', disabled: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: ActionableListState.Disabled,
  items: [
    { title: 'Item 1', action: 'Action 1', disabled: true },
    { title: 'Item 2', action: 'Action 2', disabled: true },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  state: ActionableListState.Loading,
  items: [
    { title: 'Item 1', action: 'Action 1', disabled: false },
    { title: 'Item 2', action: 'Action 2', disabled: false },
  ],
};