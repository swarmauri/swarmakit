import SearchInputWithFilterOptions from './SearchInputWithFilterOptions.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<SearchInputWithFilterOptions> = {
  title: 'component/Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  tags: ['autodocs'],
  argTypes: {
    query: { control: 'text' },
    filters: { control: 'array' },
    activeFilters: { control: 'array' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
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
    query: '',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: false,
  }
};

export const Searching: Story = {
  args: {
    query: 'Search term',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: false,
  }
};

export const FiltersActive: Story = {
  args: {
    query: '',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: ['Option 1', 'Option 2'],
    disabled: false,
  }
};

export const NoResults: Story = {
  args: {
    query: 'No results term',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    query: '',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: true,
  }
};