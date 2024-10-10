import React from 'react';
import PaginationPageNumbersPrevNext from './PaginationPageNumbersPrevNext';

export default {
  title: 'Components/PaginationPageNumbersPrevNext',
  component: PaginationPageNumbersPrevNext,
};

const Template = (args) => <PaginationPageNumbersPrevNext {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (page) => alert(`Page changed to ${page}`),
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  currentPage: 3,
  totalPages: 5,
  onPageChange: (page) => alert(`Page changed to ${page}`),
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 5,
  totalPages: 5,
  onPageChange: (page) => alert(`Page changed to ${page}`),
};