import React from 'react';
import { Meta, Story } from '@storybook/react';
import FavoritesList, { FavoritesListProps } from './FavoritesList';

export default {
  title: 'component/Lists/FavoritesList',
  component: FavoritesList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FavoritesListProps> = (args) => <FavoritesList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: 'Favorite 1', starred: false },
    { id: 2, title: 'Favorite 2', starred: true },
    { id: 3, title: 'Favorite 3', starred: false },
  ],
};

export const Starred = Template.bind({});
Starred.args = {
  ...Default.args,
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};