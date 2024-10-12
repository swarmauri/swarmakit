import ThreadReadReceipt from './ThreadReadReceipt.svelte';
import type { ReceiptState } from './ThreadReadReceipt.svelte';

export default {
  title: 'Threads/ThreadReadReceipt',
  component: ThreadReadReceipt,
  argTypes: {
    state: {
      control: 'select',
      options: ['seen', 'unseen', 'delivered', 'failed'],
    },
  },
};

const Template = (args: { state: ReceiptState }) => ({
  Component: ThreadReadReceipt,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unseen',
};

export const Seen = Template.bind({});
Seen.args = {
  state: 'seen',
};

export const Unseen = Template.bind({});
Unseen.args = {
  state: 'unseen',
};

export const Delivered = Template.bind({});
Delivered.args = {
  state: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  state: 'failed',
};