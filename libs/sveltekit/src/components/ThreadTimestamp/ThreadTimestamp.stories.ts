import ThreadTimestamp from './ThreadTimestamp.svelte';

export default {
  title: 'Threads/ThreadTimestamp',
  component: ThreadTimestamp,
  argTypes: {
    timestamp: {
      control: 'text',
    },
    isVisible: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadTimestamp,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  timestamp: '2023-10-10T14:48:00',
  isVisible: true,
};

export const Displayed = Template.bind({});
Displayed.args = {
  timestamp: '2023-10-10T14:48:00',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  timestamp: '2023-10-10T14:48:00',
  isVisible: false,
};