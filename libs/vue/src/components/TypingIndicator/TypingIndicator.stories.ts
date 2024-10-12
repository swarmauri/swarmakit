import TypingIndicator from './TypingIndicator.vue';

export default {
  title: 'Chat/TypingIndicator',
  component: TypingIndicator,
  tags: ['autodocs'],
  argTypes: {
    state: { 
      control: 'select',
      options: ['visible', 'hidden', 'typing'],
    },
  },
};

const Template = (args: any) => ({
  components: { TypingIndicator },
  setup() {
    return { args };
  },
  template: `
    <TypingIndicator v-bind="args" />
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