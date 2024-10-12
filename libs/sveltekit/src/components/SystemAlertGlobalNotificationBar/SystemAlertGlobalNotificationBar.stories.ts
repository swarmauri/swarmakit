import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: SystemAlertGlobalNotificationBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is an informational message.',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error has occurred.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message.',
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info',
};