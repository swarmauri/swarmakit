import MessageDeliveryStatusIcon from './MessageDeliveryStatusIcon.vue';

export default {
  title: 'Chat/MessageDeliveryStatusIcon',
  component: MessageDeliveryStatusIcon,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['sent', 'delivered', 'failed', 'read'],
    },
  },
};

const Template = (args: any) => ({
  components: { MessageDeliveryStatusIcon },
  setup() {
    return { args };
  },
  template: `
    <MessageDeliveryStatusIcon v-bind="args" />
  `,
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