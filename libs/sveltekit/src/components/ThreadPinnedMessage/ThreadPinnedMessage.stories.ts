import ThreadPinnedMessage from './ThreadPinnedMessage.svelte';
import type { PinnedState } from './ThreadPinnedMessage.svelte';

export default {
  title: 'Threads/ThreadPinnedMessage',
  component: ThreadPinnedMessage,
  argTypes: {
    state: {
      control: 'select',
      options: ['pinned', 'unpinned', 'visible', 'hidden'],
    },
  },
};

const Template = (args: { state: PinnedState }) => ({
  Component: ThreadPinnedMessage,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unpinned',
};

export const Pinned = Template.bind({});
Pinned.args = {
  state: 'pinned',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  state: 'unpinned',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};