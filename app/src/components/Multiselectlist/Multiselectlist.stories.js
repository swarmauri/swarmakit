import React from 'react';
import Multiselectlist from './Multiselectlist';

export default {
  title: 'Lists/Multiselectlist',
  component: Multiselectlist,
};

const Template = (args) => <Multiselectlist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};
ItemSelected.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.click(item);
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  ...Default.args,
};
ItemDeselected.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.click(item);
  await userEvent.click(item);
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabledItems: ['Item 2'],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.hover(item);
};