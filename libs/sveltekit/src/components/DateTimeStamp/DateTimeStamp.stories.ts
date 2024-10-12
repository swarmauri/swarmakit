import DateTimeStamp from './DateTimeStamp.svelte';

export default {
  title: 'Chat/DateTimeStamp',
  component: DateTimeStamp,
  argTypes: {
    isVisible: { control: 'boolean' },
    timestamp: { control: 'text' }
  },
};

const Template = (args) => ({
  Component: DateTimeStamp,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  timestamp: new Date().toISOString(),
};

export const Displayed = Template.bind({});
Displayed.args = {
  isVisible: true,
  timestamp: new Date().toISOString(),
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};