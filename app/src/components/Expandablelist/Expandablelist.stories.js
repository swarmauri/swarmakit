import React from 'react';
import ExpandableList from './ExpandableList';

export default {
  title: 'Lists/ExpandableList',
  component: ExpandableList,
};

const Template = (args) => <ExpandableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const ItemExpanded = Template.bind({});
ItemExpanded.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};
ItemExpanded.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.click(item);
};

export const ItemCollapsed = Template.bind({});
ItemCollapsed.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};
Selected.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.click(item);
};