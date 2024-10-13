import DataGrid from './DataGrid.svelte';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    columns: ['Name', 'Age', 'Email'],
    data: [
      { Name: 'Alice', Age: 30, Email: 'alice@example.com' },
      { Name: 'Bob', Age: 25, Email: 'bob@example.com' },
      { Name: 'Charlie', Age: 35, Email: 'charlie@example.com' },
    ],
    currentPage: 1,
    pageSize: 10,
    searchTerm: '',
  },
};

export const Paginated = {
  args: {
    columns: ['Name', 'Age', 'Email'],
    data: Array.from({ length: 50 }, (_, i) => ({
      Name: `Person ${i + 1}`,
      Age: 20 + (i % 30),
      Email: `person${i + 1}@example.com`,
    })),
    currentPage: 1,
    pageSize: 10,
    searchTerm: '',
  },
};

export const Search = {
  args: {
    columns: ['Name', 'Age', 'Email'],
    data: [
      { Name: 'Alice', Age: 30, Email: 'alice@example.com' },
      { Name: 'Bob', Age: 25, Email: 'bob@example.com' },
      { Name: 'Charlie', Age: 35, Email: 'charlie@example.com' },
    ],
    currentPage: 1,
    pageSize: 10,
    searchTerm: 'Alice',
  },
};

export const Resizable = {
  args: {
    columns: ['Name', 'Age', 'Email'],
    data: [
      { Name: 'Alice', Age: 30, Email: 'alice@example.com' },
      { Name: 'Bob', Age: 25, Email: 'bob@example.com' },
      { Name: 'Charlie', Age: 35, Email: 'charlie@example.com' },
    ],
    currentPage: 1,
    pageSize: 10,
    searchTerm: '',
    resizableColumns: true,
  },
};