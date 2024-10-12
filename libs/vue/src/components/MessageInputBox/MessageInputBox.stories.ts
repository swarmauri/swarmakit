import MessageInputBox from './MessageInputBox.vue';

export default {
  title: 'Chat/MessageInputBox',
  component: MessageInputBox,
  tags: ['autodocs'],
  argTypes: {
    state: { 
      control: 'select',
      options: ['focused', 'unfocused', 'typing', 'empty'],
    },
    text: {
      control: 'text',
    },
  },
};

const Template = (args: any) => ({
  components: { MessageInputBox },
  setup() {
    return { args };
  },
  template: `
    <MessageInputBox v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unfocused',
  text: '',
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
  text: '',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: 'unfocused',
  text: '',
};

export const Typing = Template.bind({});
Typing.args = {
  state: 'typing',
  text: 'Hello',
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  text: '',
};