import React from 'react';
import { Meta, Story } from '@storybook/react';
import ExpandableList, { ExpandableListProps } from './ExpandableList';

export default {
  title: 'component/Lists/ExpandableList',
  component: ExpandableList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ExpandableListProps> = (args) => <ExpandableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: 'Item 1', content: 'Content for item 1' },
    { id: 2, title: 'Item 2', content: 'Content for item 2' },
    { id: 3, title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const ItemExpanded = Template.bind({});
ItemExpanded.args = {
  ...Default.args,
};

export const ItemCollapsed = Template.bind({});
ItemCollapsed.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};