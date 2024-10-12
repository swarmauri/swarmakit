import SelectableListWithItemDetails from './SelectableListWithItemDetails.svelte';
import type { Meta, Story } from '@storybook/svelte';
import type { ListItem } from './SelectableListWithItemDetails.svelte';

const meta: Meta = {
  title: 'Components/Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: SelectableListWithItemDetails,
  props: args,
});

const sampleItems: ListItem[] = Array.from({ length: 5 }, (v, i) => ({
  id: i + 1,
  text: `Item ${i + 1}`,
  details: `Details for item ${i + 1}`,
}));

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: sampleItems.map((item, index) => ({
    ...item,
    selected: index === 0,
  })),
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: sampleItems,
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  items: sampleItems.map((item, index) => ({
    ...item,
    detailsOpen: index === 0,
  })),
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  items: sampleItems,
};