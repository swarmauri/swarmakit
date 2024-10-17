import EditableDataTable from './EditableDataTable.vue';

export default {
  title: 'components/Data/EditableDataTable',
  component: EditableDataTable,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { EditableDataTable },
  setup() {
    return { args };
  },
  template: '<EditableDataTable v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'name', label: 'Name', editable: true },
    { key: 'description', label: 'Description', editable: true, multiline: true },
    { key: 'price', label: 'Price', editable: true },
  ],
  rows: [
    { id: 1, name: 'Item 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Item 2', description: 'Description 2', price: 200 },
  ],
  pagination: false,
};

export const Editing = Template.bind({});
Editing.args = {
  ...Default.args,
  rows: [
    { id: 1, name: 'Editing Item 1', description: 'Description 1', price: 100 },
  ],
};

export const RowSelected = Template.bind({});
RowSelected.args = {
  ...Default.args,
  rows: [
    { id: 1, name: 'Item 1', description: 'Description 1', price: 100, selected: true },
  ],
};

export const RowSaved = Template.bind({});
RowSaved.args = {
  ...Default.args,
  rows: [
    { id: 1, name: 'Saved Item 1', description: 'Description 1', price: 100 },
  ],
};

export const RowDeleted = Template.bind({});
RowDeleted.args = {
  ...Default.args,
  rows: [],
};