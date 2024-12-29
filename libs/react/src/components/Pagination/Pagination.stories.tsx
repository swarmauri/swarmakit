import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

export default {
  title: 'component/Lists/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
  currentPage: 1,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const Active = Template.bind({});
Active.args = {
  totalPages: 5,
  currentPage: 3,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const Inactive = Template.bind({});
Inactive.args = {
  totalPages: 5,
  currentPage: 1,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const Hover = Template.bind({});
Hover.args = {
  totalPages: 5,
  currentPage: 1,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};