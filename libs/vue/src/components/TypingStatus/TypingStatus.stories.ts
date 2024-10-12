import TypingStatus from './TypingStatus.vue';

export default {
  title: 'Chat/TypingStatus',
  component: TypingStatus,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'typing', 'paused'],
    },
  },
};

const Template = (args: any) => ({
  components: { TypingStatus },
  setup() {
    return { args };
  },
  template: `
    <TypingStatus v-bind="args" />
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

export const Typing = Template.bind({});
Typing.args = {
  state: 'typing',
};

export const Paused = Template.bind({});
Paused.args = {
  state: 'paused',
};