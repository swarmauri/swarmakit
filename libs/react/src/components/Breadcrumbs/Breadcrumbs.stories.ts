import React from 'react';
import { Meta, Story } from '@storybook/react';
import Breadcrumbs, { BreadcrumbsProps } from './Breadcrumbs';

export default {
  title: 'component/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
    { label: 'Product', isActive: true },
  ],
};

export const Truncated = Template.bind({});
Truncated.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
    { label: 'Item 4', href: '/item4' },
    { label: 'Item 5', href: '/item5' },
    { label: 'Product', isActive: true },
  ],
  maxItems: 4,
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
    { label: 'Product', isActive: true },
  ],
};