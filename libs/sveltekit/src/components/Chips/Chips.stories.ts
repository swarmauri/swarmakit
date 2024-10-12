import Chips from './Chips.svelte';

export default {
  title: 'Miscellaneous/Chips',
  component: Chips,
  argTypes: {
    label: { control: 'text' },
    isSelectable: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    isRemovable: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Chips,
  props: args,
  on: {
    remove: args.onRemove,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Chip Label',
  isSelectable: false,
  isSelected: false,
  isRemovable: false,
};

export const Selectable = Template.bind({});
Selectable.args = {
  label: 'Selectable Chip',
  isSelectable: true,
  isSelected: false,
  isRemovable: false,
};

export const Removable = Template.bind({});
Removable.args = {
  label: 'Removable Chip',
  isSelectable: false,
  isSelected: false,
  isRemovable: true,
};

export const Grouped = () => ({
  Component: Chips,
  props: {
    label: 'Grouped Chip',
    isSelectable: true,
    isSelected: false,
    isRemovable: true,
  },
});