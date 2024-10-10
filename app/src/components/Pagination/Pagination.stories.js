import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Lists/Pagination',
  component: Pagination,
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  
  return (
    <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
  currentPage: 1,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  currentPage: 3,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('2');
  await userEvent.hover(item);
};