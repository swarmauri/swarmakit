import ExpandableList from './ExpandableList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/ExpandableList',
  component: ExpandableList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['itemExpanded', 'itemCollapsed', 'hover', 'selected'],
    },
    items: {
      control: { type: 'array' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: ExpandableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'itemCollapsed',
  items: [
    { id: 1, title: 'Item 1', content: 'Content for item 1' },
    { id: 2, title: 'Item 2', content: 'Content for item 2' },
    { id: 3, title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const ItemExpanded = Template.bind({});
ItemExpanded.args = {
  state: 'itemExpanded',
  items: Default.args.items,
};

export const ItemCollapsed = Template.bind({});
ItemCollapsed.args = {
  state: 'itemCollapsed',
  items: Default.args.items,
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
  items: Default.args.items,
};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected',
  items: Default.args.items,
};