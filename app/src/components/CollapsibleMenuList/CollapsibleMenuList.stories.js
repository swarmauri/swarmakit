import React from 'react';
import CollapsibleMenuList from './CollapsibleMenuList';

export default {
  title: 'Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CollapsibleMenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Menu Item 1', subItems: ['Sub Item 1.1', 'Sub Item 1.2'] },
    { label: 'Menu Item 2', subItems: ['Sub Item 2.1', 'Sub Item 2.2'] },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menuItems: [
    { label: 'Menu Item 1', subItems: ['Sub Item 1.1', 'Sub Item 1.2'] },
    { label: 'Menu Item 2', subItems: ['Sub Item 2.1', 'Sub Item 2.2'] },
  ],
  initialActiveIndex: 0,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  menuItems: [
    { label: 'Menu Item 1', subItems: ['Sub Item 1.1', 'Sub Item 1.2'] },
    { label: 'Menu Item 2', subItems: ['Sub Item 2.1', 'Sub Item 2.2'] },
  ],
  initialActiveIndex: null,
};

export const Hover = Template.bind({});
Hover.args = {
  menuItems: [
    { label: 'Menu Item 1', subItems: ['Sub Item 1.1', 'Sub Item 1.2'] },
    { label: 'Menu Item 2', subItems: ['Sub Item 2.1', 'Sub Item 2.2'] },
  ],
};

export const Active = Template.bind({});
Active.args = {
  menuItems: [
    { label: 'Menu Item 1', subItems: ['Sub Item 1.1', 'Sub Item 1.2'] },
    { label: 'Menu Item 2', subItems: ['Sub Item 2.1', 'Sub Item 2.2'] },
  ],
  initialActiveIndex: 1,
};