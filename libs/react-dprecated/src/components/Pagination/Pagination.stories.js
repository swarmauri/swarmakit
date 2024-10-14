import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Lists/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [activePage, setActivePage] = useState(args.activePage);
  return <Pagination {...args} activePage={activePage} onPageChange={setActivePage} />;
};

export const Default = Template.bind({});
Default.args = {
  pages: 5,
  activePage: 1,
};

export const Active = Template.bind({});
Active.args = {
  pages: 5,
  activePage: 3,
};

export const Inactive = Template.bind({});
Inactive.args = {
  pages: 5,
  activePage: 0,
};

export const Hover = Template.bind({});
Hover.args = {
  pages: 5,
  activePage: 1,
};