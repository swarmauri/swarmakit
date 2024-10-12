import ChatWindow from './ChatWindow.vue';

export default {
  title: 'Chat/ChatWindow',
  component: ChatWindow,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['open', 'closed', 'minimized', 'maximized'],
    },
  },
};

const Template = (args: any) => ({
  components: { ChatWindow },
  setup() {
    return { args };
  },
  template: `
    <ChatWindow v-bind="args">
      <p>Chat content goes here...</p>
    </ChatWindow>
  `,
});

export const Default = Template.bind({});
Default.args = {
  state: 'closed',
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  state: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  state: 'closed',
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  state: 'minimized',
};

export const Maximized = Template.bind({});
Maximized.args = {
  ...Default.args,
  state: 'maximized',
};