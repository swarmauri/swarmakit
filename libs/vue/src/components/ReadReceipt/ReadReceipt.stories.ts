import ReadReceipt from './ReadReceipt.vue';

export default {
  title: 'Chat/ReadReceipt',
  component: ReadReceipt,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['seen', 'unseen', 'delivered', 'failed'],
    },
  },
};

const Template = (args: any) => ({
  components: { ReadReceipt },
  setup() {
    return { args };
  },
  template: `
    <ReadReceipt v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  status: 'unseen',
};

export const Seen = Template.bind({});
Seen.args = {
  ...Default.args,
  status: 'seen',
};

export const Unseen = Template.bind({});
Unseen.args = {
  ...Default.args,
  status: 'unseen',
};

export const Delivered = Template.bind({});
Delivered.args = {
  ...Default.args,
  status: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  ...Default.args,
  status: 'failed',
};