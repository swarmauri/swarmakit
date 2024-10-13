import SearchBar from './SearchBar.svelte';

export default {
  title: 'Input/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isFocused: false,
    isDisabled: false,
  },
};

export const Focused = {
  args: {
    isFocused: true,
    isDisabled: false,
  },
};

export const Unfocused = {
  args: {
    isFocused: false,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    isFocused: false,
    isDisabled: true,
  },
};