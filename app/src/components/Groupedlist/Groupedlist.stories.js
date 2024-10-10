import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import GroupedList from './GroupedList';

export default {
  title: 'Lists/GroupedList',
  component: GroupedList,
};

const Template = (args) => <GroupedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Pea'] },
  ],
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Pea'] },
  ],
};
GroupExpanded.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const groupHeader = await canvas.getByText('Fruits');
  await userEvent.click(groupHeader);
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Pea'] },
  ],
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Pea'] },
  ],
};
ItemHover.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const groupHeader = await canvas.getByText('Fruits');
  await userEvent.click(groupHeader);
  const item = await canvas.getByText('Apple');
  await userEvent.hover(item);
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  groups: [
    { title: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Vegetables', items: ['Carrot', 'Lettuce', 'Pea'] },
  ],
};
ItemSelected.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const groupHeader = await canvas.getByText('Fruits');
  await userEvent.click(groupHeader);
  const item = await canvas.getByText('Apple');
  await userEvent.click(item);
};