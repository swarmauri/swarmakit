import React from 'react';
import { Meta, Story } from '@storybook/react';
import PaginationControl, { PaginationControlProps } from './PaginationControl';

export default {
  title: 'component/Data/PaginationControl',
  component: PaginationControl,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PaginationControlProps> = (args) => <PaginationControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
  rowsPerPage: 10,
  onPageChange: (page) => console.log(`Page: ${page}`),
  onRowsPerPageChange: (rows) => console.log(`Rows per page: ${rows}`),
};

export const PageSelected = Template.bind({});
PageSelected.args = {
  ...Default.args,
  currentPage: 5,
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  ...Default.args,
  currentPage: 1,
};

export const LastPage = Template.bind({});
LastPage.args = {
  ...Default.args,
  currentPage: 10,
};