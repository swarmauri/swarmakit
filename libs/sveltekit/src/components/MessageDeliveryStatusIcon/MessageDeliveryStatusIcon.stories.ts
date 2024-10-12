import MessageDeliveryStatusIcon from './MessageDeliveryStatusIcon.svelte';

export default {
  title: 'Chat/MessageDeliveryStatusIcon',
  component: MessageDeliveryStatusIcon,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['sent', 'delivered', 'failed', 'read'],
      },
    },
  },
};

const Template = (args) => ({
  Component: MessageDeliveryStatusIcon,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: 'sent',
};

export const Sent = Template.bind({});
Sent.args = {
  status: 'sent',
};

export const Delivered = Template.bind({});
Delivered.args = {
  status: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
};

export const Read = Template.bind({});
Read.args = {
  status: 'read',
};