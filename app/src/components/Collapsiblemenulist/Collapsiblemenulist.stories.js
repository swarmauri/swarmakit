import React from 'react';
import CollapsibleMenuList from './Collapsiblemenulist';

export default {
  title: 'Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
};

const Template = (args) => <CollapsibleMenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Menu 1', subItems: ['Submenu 1-1', 'Submenu 1-2'] },
    { label: 'Menu 2', subItems: ['Submenu 2-1', 'Submenu 2-2'] },
    { label: 'Menu 3', subItems: ['Submenu 3-1', 'Submenu 3-2'] },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menuItems: [
    { label: 'Menu 1', subItems: ['Submenu 1-1', 'Submenu 1-2'] },
    { label: 'Menu 2', subItems: ['Submenu 2-1', 'Submenu 2-2'] },
    { label: 'Menu 3', subItems: ['Submenu 3-1', 'Submenu 3-2'] },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};