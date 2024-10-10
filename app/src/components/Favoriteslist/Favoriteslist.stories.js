import React from 'react';
import FavoritesList from './FavoritesList';

export default {
  title: 'Lists/FavoritesList',
  component: FavoritesList,
};

const Template = (args) => <FavoritesList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ],
};

export const Starred = Template.bind({});
Starred.args = {
  items: [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ],
};
Starred.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const star = await canvas.getAllByText('★')[0];
  await userEvent.click(star);
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  items: [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ],
};
Selected.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.getByText('Item 1');
  await userEvent.click(item);
};