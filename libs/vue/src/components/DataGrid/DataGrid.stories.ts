import DataGrid from './DataGrid.vue';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'array' },
    items: { control: 'object' },
    isPaginated: { control: 'boolean' },
    itemsPerPage: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { DataGrid },
  setup() {
    return { args };
  },
  template: '<DataGrid v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Occupation'],
  items: [
    { Name: 'John Doe', Age: '30', Occupation: 'Developer' },
    { Name: 'Jane Smith', Age: '25', Occupation: 'Designer' },
    // More items...
  ],
  isPaginated: false,
};

export const Paginated = Template.bind({});
Paginated.args = {
  ...Default.args,
  isPaginated: true,
  itemsPerPage: 2,
};

export const Search = Template.bind({});
Search.args = {
  ...Default.args,
  // Add search functionality related args if necessary
};

export const Resizable = Template.bind({});
Resizable.args = {
  ...Default.args,
  // Add resizable functionality related args if necessary
};