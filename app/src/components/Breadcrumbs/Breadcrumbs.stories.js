import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'Products', 'Electronics'],
  activeIndex: null,
};

export const Truncated = Template.bind({});
Truncated.args = {
  items: ['Home', 'Products', 'Electronics', 'Laptops', 'Gaming Laptops'],
  activeIndex: null,
};

export const Active = Template.bind({});
Active.args = {
  items: ['Home', 'Products', 'Electronics'],
  activeIndex: 2,
};