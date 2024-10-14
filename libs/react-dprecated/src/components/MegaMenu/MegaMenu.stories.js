import React from 'react';
import MegaMenu from './MegaMenu';

export default {
  title: 'Navigation/MegaMenu',
  component: MegaMenu,
};

const Template = (args) => <MegaMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    { title: 'Products', submenu: ['Product 1', 'Product 2', 'Product 3'] },
    { title: 'Services', submenu: ['Service 1', 'Service 2', 'Service 3'] },
    { title: 'Contact', submenu: ['Email', 'Phone', 'Address'] },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  categories: [
    { title: 'Products', submenu: ['Product 1', 'Product 2', 'Product 3'] },
    { title: 'Services', submenu: ['Service 1', 'Service 2', 'Service 3'] },
    { title: 'Contact', submenu: ['Email', 'Phone', 'Address'] },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  categories: [
    { title: 'Products', submenu: ['Product 1', 'Product 2', 'Product 3'] },
    { title: 'Services', submenu: ['Service 1', 'Service 2', 'Service 3'] },
    { title: 'Contact', submenu: ['Email', 'Phone', 'Address'] },
  ],
};

export const Active = Template.bind({});
Active.args = {
  categories: [
    { title: 'Products', submenu: ['Product 1', 'Product 2', 'Product 3'] },
    { title: 'Services', submenu: ['Service 1', 'Service 2', 'Service 3'] },
    { title: 'Contact', submenu: ['Email', 'Phone', 'Address'] },
  ],
};