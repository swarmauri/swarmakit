import UnreadMessageCounter from './UnreadMessageCounter.vue';

export default {
  title: 'Chat/UnreadMessageCounter',
  component: UnreadMessageCounter,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { UnreadMessageCounter },
  setup() {
    return { args };
  },
  template: `
    <UnreadMessageCounter v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  count: 5,
};

export const Displayed = Template.bind({});
Displayed.args = {
  count: 10,
};

export const Hidden = Template.bind({});
Hidden.args = {
  count: 0,
};

export const Incremented = Template.bind({});
Incremented.args = {
  count: 15,
};

export const Decremented = Template.bind({});
Decremented.args = {
  count: 3,
};