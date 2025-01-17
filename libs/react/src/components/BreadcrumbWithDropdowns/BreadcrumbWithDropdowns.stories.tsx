import React from 'react';
import { Meta, Story } from '@storybook/react';
import BreadcrumbWithDropdowns, { BreadcrumbWithDropdownsProps } from './BreadcrumbWithDropdowns';

export default {
  title: 'component/Navigation/BreadcrumbWithDropdowns',
  component: BreadcrumbWithDropdowns,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BreadcrumbWithDropdownsProps> = (args) => <BreadcrumbWithDropdowns {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home' },
    { label: 'Category', dropdownItems: ['Subcategory 1', 'Subcategory 2'] },
    { label: 'Product' },
  ],
};

export const DropdownOpen = Template.bind({});
DropdownOpen.args = {
  items: [
    { label: 'Home' },
    { label: 'Category', dropdownItems: ['Subcategory 1', 'Subcategory 2'] },
    { label: 'Product' },
  ],
};

export const DropdownClosed = Template.bind({});
DropdownClosed.args = {
  items: [
    { label: 'Home' },
    { label: 'Category', dropdownItems: ['Subcategory 1', 'Subcategory 2'] },
    { label: 'Product' },
  ],
};