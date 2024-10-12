import ReadReceipt from './ReadReceipt.svelte';

export default {
  title: 'Chat/ReadReceipt',
  component: ReadReceipt,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['seen', 'unseen', 'delivered', 'failed'],
    },
  },
};

const Template = (args) => ({
  Component: ReadReceipt,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: 'unseen',
};

export const Seen = Template.bind({});
Seen.args = {
  status: 'seen',
};

export const Unseen = Template.bind({});
Unseen.args = {
  status: 'unseen',
};

export const Delivered = Template.bind({});
Delivered.args = {
  status: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
};