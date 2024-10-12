import SplitView from './SplitView.svelte';
import type { SplitViewState } from './SplitView.svelte';

export default {
  title: 'UI Layout/SplitView',
  component: SplitView,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'resized', 'collapsed'],
    },
    leftContent: { control: 'text' },
    rightContent: { control: 'text' },
  },
};

const Template = (args: { state: SplitViewState; leftContent: string; rightContent: string }) => ({
  Component: SplitView,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  leftContent: 'Left Pane',
  rightContent: 'Right Pane',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  leftContent: 'Visible Left Pane',
  rightContent: 'Visible Right Pane',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  leftContent: 'Hidden Left Pane',
  rightContent: 'Hidden Right Pane',
};

export const Resized = Template.bind({});
Resized.args = {
  state: 'resized',
  leftContent: 'Resized Left Pane',
  rightContent: 'Resized Right Pane',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  leftContent: 'Collapsed Left Pane',
  rightContent: 'Collapsed Right Pane',
};