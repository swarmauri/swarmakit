import ChatList from './ChatList.vue';

export default {
  title: 'Chat/ChatList',
  component: ChatList,
  tags: ['autodocs'],
  argTypes: {
    chats: { control: 'object' },
    selectedChatId: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { ChatList },
  setup() {
    return { args };
  },
  template: `
    <ChatList v-bind="args" @select="onSelect" />
  `,
  methods: {
    onSelect(chatId: string) {
      console.log(`Selected chat: ${chatId}`);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  chats: [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ],
  selectedChatId: null,
};

export const Populated = Template.bind({});
Populated.args = {
  chats: [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ],
  selectedChatId: null,
};

export const Empty = Template.bind({});
Empty.args = {
  chats: [],
  selectedChatId: null,
};

export const Selected = Template.bind({});
Selected.args = {
  chats: [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ],
  selectedChatId: '2',
};