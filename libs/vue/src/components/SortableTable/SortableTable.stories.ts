import SortableTable from './SortableTable.vue';

export default {
  title: 'Lists/SortableTable',
  component: SortableTable,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'array' },
    columns: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { SortableTable },
  setup() {
    return { args };
  },
  template: '<SortableTable v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ],
  data: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    age: 20 + i,
  })),
};

export const Sorting = Template.bind({});
Sorting.args = {
  ...Default.args,
};

export const Filtering = Template.bind({});
Filtering.args = {
  ...Default.args,
};

export const RowSelection = Template.bind({});
RowSelection.args = {
  ...Default.args,
};