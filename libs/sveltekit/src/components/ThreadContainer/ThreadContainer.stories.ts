import ThreadContainer from './ThreadContainer.svelte';

export default {
  title: 'Threads/ThreadContainer',
  component: ThreadContainer,
  argTypes: {
    isOpen: { control: 'boolean' },
    isExpanded: { control: 'boolean' },
    threadTitle: { control: 'text' },
    threadContent: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: ThreadContainer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  isExpanded: false,
  threadTitle: 'Thread Title',
  threadContent: 'This is the content of the thread.',
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  isExpanded: false,
  threadTitle: 'Thread Title',
  threadContent: 'This is the content of the thread.',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  isExpanded: false,
  threadTitle: 'Thread Title',
  threadContent: 'This is the content of the thread.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  isOpen: true,
  isExpanded: true,
  threadTitle: 'Thread Title',
  threadContent: 'This is the content of the thread.',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  isOpen: true,
  isExpanded: false,
  threadTitle: 'Thread Title',
  threadContent: 'This is the content of the thread.',
};