import DataGrid from './DataGrid.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<DataGrid> = {
  title: 'component/Lists/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    rows: { control: 'object' },
    pageSize: { control: 'number' },
    searchQuery: { control: 'text' },
    resizable: { control: 'boolean' }
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { id: 'id', label: 'ID' },
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' }
    ],
    rows: [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Smith', age: 34 },
      { id: 3, name: 'Alice Johnson', age: 45 }
    ],
    pageSize: 10,
    searchQuery: '',
    resizable: false
  }
};

export const Paginated: Story = {
  args: {
    columns: [
      { id: 'id', label: 'ID' },
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' }
    ],
    rows: Array.from({ length: 30 }, (_, i) => ({ id: i + 1, name: `User ${i + 1}`, age: 20 + i })),
    pageSize: 5,
    searchQuery: '',
    resizable: false
  }
};

export const Search: Story = {
  args: {
    columns: [
      { id: 'id', label: 'ID' },
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' }
    ],
    rows: [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Smith', age: 34 },
      { id: 3, name: 'Alice Johnson', age: 45 }
    ],
    pageSize: 10,
    searchQuery: 'Jane',
    resizable: false
  }
};

export const Resizable: Story = {
  args: {
    columns: [
      { id: 'id', label: 'ID' },
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' }
    ],
    rows: [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Smith', age: 34 },
      { id: 3, name: 'Alice Johnson', age: 45 }
    ],
    pageSize: 10,
    searchQuery: '',
    resizable: true
  }
};