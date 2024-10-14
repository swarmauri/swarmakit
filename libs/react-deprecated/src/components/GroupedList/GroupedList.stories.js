import React from 'react';
import GroupedList from './GroupedList';

export default {
  title: 'Lists/GroupedList',
  component: GroupedList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <GroupedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  groups: [
    {
      name: 'Fruits',
      items: [
        { title: 'Apple' },
        { title: 'Banana' },
      ],
    },
    {
      name: 'Vegetables',
      items: [
        { title: 'Carrot' },
        { title: 'Broccoli' },
      ],
    },
  ],
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  groups: [
    {
      name: 'Fruits',
      items: [
        { title: 'Apple' },
        { title: 'Banana' },
      ],
    },
  ],
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  groups: [
    {
      name: 'Fruits',
      items: [
        { title: 'Apple' },
        { title: 'Banana' },
      ],
    },
  ],
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  groups: [
    {
      name: 'Fruits',
      items: [
        { title: 'Apple' },
        { title: 'Banana' },
      ],
    },
  ],
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  groups: [
    {
      name: 'Fruits',
      items: [
        { title: 'Apple' },
        { title: 'Banana' },
      ],
    },
  ],
};