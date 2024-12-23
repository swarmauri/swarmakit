import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScrollableList, { ScrollableListProps } from './ScrollableList';

export default {
  title: 'component/Lists/ScrollableList',
  component: ScrollableList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ScrollableListProps> = (args) => <ScrollableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => ({ id: `${i}`, content: `Item ${i + 1}` })),
  disabled: false,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  ...Default.args,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  ...Default.args,
  items: Array.from({ length: 5 }, (_, i) => ({ id: `${i}`, content: `Item ${i + 1}` })),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};