import Toast from './Toast.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    message: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: Toast,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  message: 'This is an informational message.',
  isVisible: true,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Operation completed successfully!',
  isVisible: true,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Something went wrong!',
  isVisible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning message!',
  isVisible: true,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This is an informational message.',
  isVisible: true,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  type: 'info',
  message: 'This message has been dismissed.',
  isVisible: false,
};