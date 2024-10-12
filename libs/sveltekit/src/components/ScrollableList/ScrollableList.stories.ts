import ScrollableList from './ScrollableList.svelte';
import type { Meta, Story } from '@storybook/svelte';
import type { ListItem } from './ScrollableList.svelte';

const meta: Meta = {
  title: 'Components/Lists/ScrollableList',
  component: ScrollableList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: ScrollableList,
  props: args,
});

const sampleItems: ListItem[] = Array.from({ length: 20 }, (v, i) => ({
  id: i + 1,
  text: `Item ${i + 1}`,
}));

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
  disabled: false,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  items: sampleItems,
  disabled: false,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: sampleItems,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  items: sampleItems,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: sampleItems,
  disabled: true,
};