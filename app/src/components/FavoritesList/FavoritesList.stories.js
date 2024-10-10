import React from 'react';
import FavoritesList from './FavoritesList';

export default {
  title: 'Lists/FavoritesList',
  component: FavoritesList,
  parameters: {
    layout: 'centered',
  },
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
  starredIndex: 1,
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  items: [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ],
  starredIndex: null,
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
  selectedIndex: 0,
};