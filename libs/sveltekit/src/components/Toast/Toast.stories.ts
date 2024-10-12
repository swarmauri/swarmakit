import Toast from './Toast.svelte';
import type { ToastState } from './Toast.svelte';

export default {
  title: 'UI Layout/Toast',
  component: Toast,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'dismissed', 'autoHide'],
    },
    message: { control: 'text' },
    autoHideDuration: { control: { type: 'number', min: 1000, max: 10000, step: 500 } },
  },
};

const Template = (args: { state: ToastState; message: string; autoHideDuration: number }) => ({
  Component: Toast,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  message: 'This is a toast message!',
  autoHideDuration: 3000,
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  message: 'This is a visible toast!',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  message: 'This toast is hidden and will not show.',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  state: 'dismissed',
  message: 'This toast was dismissed.',
};

export const AutoHide = Template.bind({});
AutoHide.args = {
  state: 'autoHide',
  message: 'This toast will auto-hide!',
  autoHideDuration: 3000,
};