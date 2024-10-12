import ThreadUnreadMessageCounter from './ThreadUnreadMessageCounter.svelte';

export default {
  title: 'Threads/ThreadUnreadMessageCounter',
  component: ThreadUnreadMessageCounter,
  argTypes: {
    count: {
      control: 'number',
    },
    isDisplayed: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadUnreadMessageCounter,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  count: 0,
  isDisplayed: true,
};

export const Displayed = Template.bind({});
Displayed.args = {
  count: 5,
  isDisplayed: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  count: 5,
  isDisplayed: false,
};

export const Incremented = Template.bind({});
Incremented.args = {
  count: 10,
  isDisplayed: true,
};

export const Decremented = Template.bind({});
Decremented.args = {
  count: 2,
  isDisplayed: true,
};