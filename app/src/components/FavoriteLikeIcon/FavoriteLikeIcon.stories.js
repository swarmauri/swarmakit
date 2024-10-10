import React, { useState } from 'react';
import FavoriteLikeIcon from './FavoriteLikeIcon';

export default {
  title: 'Components/FavoriteLikeIcon',
  component: FavoriteLikeIcon,
};

const Template = (args) => {
  const [isFavorite, setIsFavorite] = useState(args.isFavorite);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return <FavoriteLikeIcon {...args} isFavorite={isFavorite} onClick={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  isFavorite: false,
};

export const Favorite = Template.bind({});
Favorite.args = {
  isFavorite: true,
};