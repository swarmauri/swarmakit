import React from 'react';
import { Meta, Story } from '@storybook/react';
import CollapsibleMenuList from './CollapsibleMenuList';

export default {
  title: 'component/Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CollapsibleMenuListProps> = (args) => <CollapsibleMenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Menu Item 1', content: 'Content for menu item 1' },
    { id: 2, label: 'Menu Item 2', content: 'Content for menu item 2' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    { id: 1, label: 'Menu Item 1', content: 'Content for menu item 1' },
    { id: 2, label: 'Menu Item 2', content: 'Content for menu item 2' },
  ],
  initialActiveItem: 1,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    { id: 1, label: 'Menu Item 1', content: 'Content for menu item 1' },
    { id: 2, label: 'Menu Item 2', content: 'Content for menu item 2' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, label: 'Menu Item 1', content: 'Content for menu item 1' },
    { id: 2, label: 'Menu Item 2', content: 'Content for menu item 2' },
  ],
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { id: 1, label: 'Menu Item 1', content: 'Content for menu item 1' },
    { id: 2, label: 'Menu Item 2', content: 'Content for menu item 2' },
  ],
  initialActiveItem: 1,
};