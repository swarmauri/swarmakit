import ChatWindow from './ChatWindow.svelte';

export default {
  title: 'Chat/ChatWindow',
  component: ChatWindow,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['open', 'closed', 'minimized', 'maximized'],
    },
  },
};

const Template = (args) => ({
  Component: ChatWindow,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'closed',
};

export const Open = Template.bind({});
Open.args = {
  state: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  state: 'closed',
};

export const Minimized = Template.bind({});
Minimized.args = {
  state: 'minimized',
};

export const Maximized = Template.bind({});
Maximized.args = {
  state: 'maximized',
};