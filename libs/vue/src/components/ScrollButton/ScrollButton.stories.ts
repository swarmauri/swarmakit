import ScrollButton from './ScrollButton.vue';

export default {
  title: 'Chat/ScrollButton',
  component: ScrollButton,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'hovered', 'clicked'],
    },
  },
};

const Template = (args: any) => ({
  components: { ScrollButton },
  setup() {
    return { args };
  },
  template: `
    <ScrollButton v-bind="args" />
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

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};