import Badge from './Badge.svelte';

export default {
  title: 'Components/Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select', options: ['default', 'notification', 'status'] } },
    label: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: Badge,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  label: 'Default Badge',
};

export const Notification = Template.bind({});
Notification.args = {
  type: 'notification',
  label: '3',
};

export const StatusIndicator = Template.bind({});
StatusIndicator.args = {
  type: 'status',
  label: 'Active',
};