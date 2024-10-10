import React from 'react';
import BreadcrumbWithDropdowns from './BreadcrumbWithDropdowns';

export default {
  title: 'Navigation/BreadcrumbWithDropdowns',
  component: BreadcrumbWithDropdowns,
};

const Template = (args) => <BreadcrumbWithDropdowns {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home' },
    { label: 'Products', subItems: ['Electronics', 'Clothing'] },
    { label: 'Electronics', subItems: ['Phones', 'Laptops'] },
  ],
};

export const DropdownOpen = Template.bind({});
DropdownOpen.args = {
  items: [
    { label: 'Home' },
    { label: 'Products', subItems: ['Electronics', 'Clothing'] },
    { label: 'Electronics', subItems: ['Phones', 'Laptops'] },
  ],
};

export const DropdownClosed = Template.bind({});
DropdownClosed.args = {
  items: [
    { label: 'Home' },
    { label: 'Products', subItems: ['Electronics', 'Clothing'] },
    { label: 'Electronics', subItems: ['Phones', 'Laptops'] },
  ],
};