import SendButton from './SendButton.vue';

export default {
  title: 'Chat/SendButton',
  component: SendButton,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['enabled', 'disabled', 'hovered', 'clicked'],
    },
  },
};

const Template = (args: any) => ({
  components: { SendButton },
  setup() {
    return { args };
  },
  template: `
    <SendButton v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  state: 'enabled',
};

export const Enabled = Template.bind({});
Enabled.args = {
  state: 'enabled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};