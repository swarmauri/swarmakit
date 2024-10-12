import SortableList from './SortableList.vue';

export default {
  title: 'Lists/SortableList',
  component: SortableList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { SortableList },
  setup() {
    return { args };
  },
  template: '<SortableList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
  ],
};

export const Dragging = Template.bind({});
Dragging.args = {
  items: [
    { id: 1, label: 'Item A' },
    { id: 2, label: 'Item B' },
    { id: 3, label: 'Item C' },
  ],
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: [
    { id: 3, label: 'Item C' },
    { id: 1, label: 'Item A' },
    { id: 2, label: 'Item B' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, label: 'Item 1', disabled: true },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3', disabled: true },
  ],
};