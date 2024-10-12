import Chips from './Chips.vue';

export default {
  title: 'Miscellaneous/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    selectable: { control: 'boolean' },
    removable: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Chips },
  setup() {
    return { args };
  },
  template: '<Chips v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [{ label: 'Chip 1' }, { label: 'Chip 2' }, { label: 'Chip 3' }],
  selectable: false,
  removable: false,
};

export const Selectable = Template.bind({});
Selectable.args = {
  items: [{ label: 'Selectable 1' }, { label: 'Selectable 2' }],
  selectable: true,
  removable: false,
};

export const Removable = Template.bind({});
Removable.args = {
  items: [{ label: 'Removable 1' }, { label: 'Removable 2' }],
  selectable: false,
  removable: true,
};

export const Grouped = Template.bind({});
Grouped.args = {
  items: [
    { label: 'Grouped 1' },
    { label: 'Grouped 2' },
    { label: 'Grouped 3' },
  ],
  selectable: true,
  removable: true,
};