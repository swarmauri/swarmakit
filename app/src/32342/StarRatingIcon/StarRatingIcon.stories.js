import React, { useState } from 'react';
import StarRatingIcon from './StarRatingIcon';

export default {
  title: 'Components/StarRatingIcon',
  component: StarRatingIcon,
};

const Template = (args) => {
  const [rating, setRating] = useState(args.rating);

  const handleRate = (newRating) => {
    setRating(newRating);
  };

  return <StarRatingIcon {...args} rating={rating} onRate={handleRate} />;
};

export const Default = Template.bind({});
Default.args = {
  rating: 0,
};

export const RatedThree = Template.bind({});
RatedThree.args = {
  rating: 3,
};

export const RatedFive = Template.bind({});
RatedFive.args = {
  rating: 5,
};