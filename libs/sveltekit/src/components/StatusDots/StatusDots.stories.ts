import StatusDots from './StatusDots.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/StatusDots',
  component: StatusDots,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'busy', 'idle'],
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: StatusDots,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: 'offline',
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'busy',
};

export const Idle = Template.bind({});
Idle.args = {
  status: 'idle',
};