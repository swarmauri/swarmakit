import ChatList from './ChatList.svelte';

export default {
  title: 'Chat/ChatList',
  component: ChatList,
  argTypes: {
    chats: { control: 'object' },
    onSelect: { action: 'onSelect' },
  },
};

const Template = (args) => ({
  Component: ChatList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  chats: [],
};

export const Populated = Template.bind({});
Populated.args = {
  chats: [
    { id: 1, name: 'Alice', lastMessage: 'Hi there!', isSelected: false },
    { id: 2, name: 'Bob', lastMessage: 'Hello!', isSelected: false },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  chats: [],
};

export const Selected = Template.bind({});
Selected.args = {
  chats: [
    { id: 1, name: 'Alice', lastMessage: 'Hi there!', isSelected: false },
    { id: 2, name: 'Bob', lastMessage: 'Hello!', isSelected: true },
  ],
};