import React from 'react';
import Numberedlist from './Numberedlist';

export default {
  title: 'Lists/Numberedlist',
  component: Numberedlist,
};

const Template = (args) => <Numberedlist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};
Selected.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.click(item);
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

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabledItems: ['Item 2'],
};