import SearchBar from './SearchBar.svelte';
import type { SearchBarState } from './SearchBar.svelte';

export default {
  title: 'Input/SearchBar',
  component: SearchBar,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(SearchBarState),
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: SearchBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: SearchBarState.Unfocused,
  placeholder: 'Search...',
  value: '',
};

export const Focused = Template.bind({});
Focused.args = {
  state: SearchBarState.Focused,
  placeholder: 'Search...',
  value: '',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: SearchBarState.Unfocused,
  placeholder: 'Search...',
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: SearchBarState.Disabled,
  placeholder: 'Search...',
  value: '',
};