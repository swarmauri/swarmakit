import SearchBar from './SearchBar.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Input/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['focused', 'unfocused', 'disabled'],
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: SearchBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unfocused',
  placeholder: 'Search...',
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
  placeholder: 'Search...',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: 'unfocused',
  placeholder: 'Search...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  placeholder: 'Search...',
};