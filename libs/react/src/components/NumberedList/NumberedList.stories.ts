import React from 'react';
import { Meta, Story } from '@storybook/react';
import NumberedList, { NumberedListProps } from './NumberedList';

export default {
  title: 'component/Lists/NumberedList',
  component: NumberedList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<NumberedListProps> = (args) => <NumberedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Selected = Template.bind({});
Selected.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: true,
};