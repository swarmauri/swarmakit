import UnreadMessageCounter from './UnreadMessageCounter.svelte';

export default {
  title: 'Chat/UnreadMessageCounter',
  component: UnreadMessageCounter,
  argTypes: {
    count: { control: 'number' },
    visible: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: UnreadMessageCounter,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  count: 0,
  visible: true,
};

export const Displayed = Template.bind({});
Displayed.args = {
  count: 5,
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  count: 5,
  visible: false,
};

export const Incremented = Template.bind({});
Incremented.args = {
  count: 10,
  visible: true,
};

export const Decremented = Template.bind({});
Decremented.args = {
  count: 2,
  visible: true,
};