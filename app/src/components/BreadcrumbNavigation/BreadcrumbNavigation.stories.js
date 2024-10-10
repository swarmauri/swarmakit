import React from 'react';
import BreadcrumbNavigation from './BreadcrumbNavigation';

export default {
  title: 'Components/BreadcrumbNavigation',
  component: BreadcrumbNavigation,
  argTypes: {
    crumbs: { control: 'object' },
  },
};

const Template = (args) => <BreadcrumbNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  crumbs: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Cameras', href: '/products/electronics/cameras' },
  ],
};

export const SingleCrumb = Template.bind({});
SingleCrumb.args = {
  crumbs: [
    { label: 'Home', href: '/' },
  ],
};

export const LongBreadcrumb = Template.bind({});
LongBreadcrumb.args = {
  crumbs: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/category/subcategory' },
    { label: 'Product', href: '/category/subcategory/product' },
    { label: 'Details', href: '/category/subcategory/product/details' },
  ],
};