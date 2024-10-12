import MultiselectList from './MultiselectList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/MultiselectList',
  component: MultiselectList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    selectedItems: {
      control: { type: 'object' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: MultiselectList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItems: new Set(),
  disabled: false,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItems: new Set([1]),
  disabled: false,
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItems: new Set(),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItems: new Set(),
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItems: new Set(),
  disabled: false,
};