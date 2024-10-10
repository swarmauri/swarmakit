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
    { title: 'Item 1', starred: false },
    { title: 'Item 2', starred: true },
    { title: 'Item 3', starred: false },
  ],
};

export const Starred = Template.bind({});
Starred.args = {
  items: [
    { title: 'Item 1', starred: true },
    { title: 'Item 2', starred: true },
    { title: 'Item 3, starred: true },
  ],
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  items: [
    { title: 'Item 1', starred: false },
    { title: 'Item 2', starred: false },
    { title: 'Item 3', starred: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};