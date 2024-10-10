import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Lists/Pagination',
  component: Pagination,
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
};

export const Active = Template.bind({});
Active.args = {
  totalPages: 5,
};

export const Inactive = Template.bind({});
Inactive.args = {
  totalPages: 5,
};

export const Hover = Template.bind({});
Hover.args = {
  totalPages: 5,
};