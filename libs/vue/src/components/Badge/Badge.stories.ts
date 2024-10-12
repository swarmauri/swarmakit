import Badge from './Badge.vue';

export default {
  title: 'Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['default', 'notification', 'status'] },
    },
    default: {
      control: 'text',
      description: 'Text content of the badge',
    },
  },
};

const Template = (args: any) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args">{{ args.default }}</Badge>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  default: 'Default Badge',
};

export const Notification = Template.bind({});
Notification.args = {
  type: 'notification',
  default: '3',
};

export const StatusIndicator = Template.bind({});
StatusIndicator.args = {
  type: 'status',
  default: 'Online',
};