import React from 'react';
import PaginationControl from './PaginationControl';

export default {
  title: 'UI Layout/PaginationControl',
  component: PaginationControl,
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'changed' },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <PaginationControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  currentPage: 1,
  totalPages: 5,
  loading: true,
};

export const Rendered = Template.bind({});
Rendered.args = {
  currentPage: 3,
  totalPages: 5,
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  currentPage: 3,
  totalPages: 5,
  loading: true,
};

export const NextPage = Template.bind({});
NextPage.args = {
  currentPage: 2,
  totalPages: 5,
  loading: false,
};

export const PreviousPage = Template.bind({});
PreviousPage.args = {
  currentPage: 3,
  totalPages: 5,
  loading: false,
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  currentPage: 1,
  totalPages: 5,
  loading: false,
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 5,
  totalPages: 5,
  loading: false,
};