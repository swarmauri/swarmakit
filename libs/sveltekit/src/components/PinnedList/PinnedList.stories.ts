import PinnedList from './PinnedList.svelte';
import type { Meta, Story } from '@storybook/svelte';
import type { ListItem } from './PinnedList.svelte';

const meta: Meta = {
  title: 'Components/Lists/PinnedList',
  component: PinnedList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: PinnedList,
  props: args,
});

const sampleItems: ListItem[] = [
  { id: 1, text: 'Item 1', pinned: false },
  { id: 2, text: 'Item 2', pinned: false },
  { id: 3, text: 'Item 3', pinned: false },
];

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
};

export const Pinned = Template.bind({});
Pinned.args = {
  items: sampleItems.map((item, index) => ({
    ...item,
    pinned: index === 0,
  })),
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  items: sampleItems.map((item) => ({
    ...item,
    pinned: false,
  })),
};

export const Hover = Template.bind({});
Hover.args = {
  items: sampleItems,
};

export const Selected = Template.bind({});
Selected.args = {
  items: sampleItems.map((item, index) => ({
    ...item,
    pinned: index === 1,
  })),
};