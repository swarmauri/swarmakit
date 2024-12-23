import React from 'react';
import { Meta, Story } from '@storybook/react';
import SidebarWithAccordionMenus, { SidebarWithAccordionMenusProps } from './SidebarWithAccordionMenus';

export default {
  title: 'component/Navigation/SidebarWithAccordionMenus',
  component: SidebarWithAccordionMenus,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SidebarWithAccordionMenusProps> = (args) => <SidebarWithAccordionMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: [
    {
      title: 'Menu 1',
      items: [
        { label: 'Item 1', onClick: () => alert('Item 1 clicked') },
        { label: 'Item 2', onClick: () => alert('Item 2 clicked'), disabled: true },
      ],
    },
    {
      title: 'Menu 2',
      items: [
        { label: 'Item 3', onClick: () => alert('Item 3 clicked') },
        { label: 'Item 4', onClick: () => alert('Item 4 clicked') },
      ],
    },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menus: [
    {
      title: 'Menu 1',
      items: [
        { label: 'Item 1', onClick: () => alert('Item 1 clicked') },
        { label: 'Item 2', onClick: () => alert('Item 2 clicked') },
      ],
    },
    {
      title: 'Menu 2',
      items: [
        { label: 'Item 3', onClick: () => alert('Item 3 clicked') },
        { label: 'Item 4', onClick: () => alert('Item 4 clicked') },
      ],
    },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  menus: [
    {
      title: 'Menu 1',
      items: [
        { label: 'Item 1', onClick: () => alert('Item 1 clicked') },
        { label: 'Item 2', onClick: () => alert('Item 2 clicked') },
      ],
    },
    {
      title: 'Menu 2',
      items: [
        { label: 'Item 3', onClick: () => alert('Item 3 clicked') },
        { label: 'Item 4', onClick: () => alert('Item 4 clicked') },
      ],
    },
  ],
};

export const Active = Template.bind({});
Active.args = {
  menus: [
    {
      title: 'Menu 1',
      items: [
        { label: 'Item 1', onClick: () => alert('Item 1 clicked') },
        { label: 'Item 2', onClick: () => alert('Item 2 clicked') },
      ],
    },
    {
      title: 'Menu 2',
      items: [
        { label: 'Item 3', onClick: () => alert('Item 3 clicked') },
        { label: 'Item 4', onClick: () => alert('Item 4 clicked') },
      ],
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  menus: [
    {
      title: 'Menu 1',
      items: [
        { label: 'Item 1', onClick: () => alert('Item 1 clicked'), disabled: true },
        { label: 'Item 2', onClick: () => alert('Item 2 clicked'), disabled: true },
      ],
    },
    {
      title: 'Menu 2',
      items: [
        { label: 'Item 3', onClick: () => alert('Item 3 clicked'), disabled: true },
        { label: 'Item 4', onClick: () => alert('Item 4 clicked'), disabled: true },
      ],
    },
  ],
};