import Notification from './Notification.vue';

export default {
  title: 'Overlays/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: { type: 'select', options: ['success', 'error', 'warning', 'info'] } 
    },
    dismissed: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Notification },
  setup() {
    return { args };
  },
  template: `
    <Notification v-bind="args">
      This is a {{ args.type }} notification.
    </Notification>
  `,
});

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  dismissed: false,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  dismissed: false,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  dismissed: false,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  dismissed: false,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  dismissed: false,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  type: 'info',
  dismissed: true,
};