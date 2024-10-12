import CardbasedList from './CardbasedList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/CardbasedList',
  component: CardbasedList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['hover', 'selected', 'disabled'],
    },
    items: {
      control: { type: 'array' },
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
  Component: CardbasedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'hover',
  items: [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
  ],
  selectedItem: null,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
  items: [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
  ],
  selectedItem: null,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected',
  items: [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
  ],
  selectedItem: 1,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  items: [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
  ],
  selectedItem: null,
  disabled: true,
};