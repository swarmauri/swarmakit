import MessageReactions from './MessageReactions.vue';

export default {
  title: 'Chat/MessageReactions',
  component: MessageReactions,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['available', 'unavailable', 'hovered', 'clicked'],
    },
  },
};

const Template = (args: any) => ({
  components: { MessageReactions },
  setup() {
    return { args };
  },
  template: `
    <MessageReactions v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unavailable',
};

export const Available = Template.bind({});
Available.args = {
  state: 'available',
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  state: 'unavailable',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};