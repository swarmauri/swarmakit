import MessageOptionsMenu from './MessageOptionsMenu.vue';

export default {
  title: 'Chat/MessageOptionsMenu',
  component: MessageOptionsMenu,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'clicked'],
    },
  },
};

const Template = (args: any) => ({
  components: { MessageOptionsMenu },
  setup() {
    return { args };
  },
  template: `
    <MessageOptionsMenu v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  state: 'hidden',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};