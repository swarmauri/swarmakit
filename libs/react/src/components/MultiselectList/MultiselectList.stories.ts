import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultiselectList, { MultiselectListProps } from './MultiselectList';

export default {
  title: 'component/Lists/MultiselectList',
  component: MultiselectList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MultiselectListProps> = (args) => <MultiselectList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};