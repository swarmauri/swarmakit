import CheckList from './CheckList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/CheckList',
  component: CheckList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['checked', 'unchecked', 'partially-checked', 'disabled'],
    },
    items: {
      control: { type: 'array' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: CheckList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unchecked',
  items: [
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: false },
  ],
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  state: 'checked',
  items: [
    { label: 'Item 1', checked: true },
    { label: 'Item 2', checked: true },
    { label: 'Item 3', checked: true },
  ],
  disabled: false,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  state: 'unchecked',
  items: [
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: false },
  ],
  disabled: false,
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  state: 'partially-checked',
  items: [
    { label: 'Item 1', checked: true },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: true },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  items: [
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: true },
    { label: 'Item 3', checked: false },
  ],
  disabled: true,
};