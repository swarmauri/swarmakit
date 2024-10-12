import SearchBox from './SearchBox.svelte';

export default {
  title: 'Chat/SearchBox',
  component: SearchBox,
  argTypes: {
    query: { control: 'text' },
    placeholder: { control: 'text' },
    onInput: { action: 'input' },
  },
};

const Template = (args) => ({
  Component: SearchBox,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  query: '',
  placeholder: 'Search...',
};

export const Focused = Template.bind({});
Focused.args = {
  query: '',
  placeholder: 'Search...',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  query: '',
  placeholder: 'Search...',
};

export const Typing = Template.bind({});
Typing.args = {
  query: 'Some text',
  placeholder: 'Search...',
};

export const Empty = Template.bind({});
Empty.args = {
  query: '',
  placeholder: 'Search...',
};