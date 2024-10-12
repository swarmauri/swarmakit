import NumberedList from './NumberedList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/NumberedList',
  component: NumberedList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    selectedItem: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: NumberedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItem: null,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItem: 1,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItem: null,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
  selectedItem: null,
  disabled: true,
};