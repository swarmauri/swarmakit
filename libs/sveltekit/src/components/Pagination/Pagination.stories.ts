import Pagination from './Pagination.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: { type: 'number' },
    },
    currentPage: {
      control: { type: 'number' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: Pagination,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
  currentPage: 1,
};

export const Active = Template.bind({});
Active.args = {
  totalPages: 5,
  currentPage: 3,
};

export const Inactive = Template.bind({});
Inactive.args = {
  totalPages: 5,
  currentPage: 0,
};

export const Hover = Template.bind({});
Hover.args = {
  totalPages: 5,
  currentPage: 1,
};