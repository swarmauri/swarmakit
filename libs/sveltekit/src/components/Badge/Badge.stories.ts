import Badge from './Badge.svelte';

export default {
  title: 'Indicators/Badge',
  component: Badge,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'notification', 'status'],
    },
    content: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  Component: Badge,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  content: 'Default Badge',
};

export const Notification = Template.bind({});
Notification.args = {
  type: 'notification',
  content: '3',
};

export const StatusIndicator = Template.bind({});
StatusIndicator.args = {
  type: 'status',
  content: 'Active',
};