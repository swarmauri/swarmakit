import React from 'react';
import { Meta, Story } from '@storybook/react';
import RatingStars from './RatingStars';

export default {
  title: 'component/Indicators/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RatingStarsProps> = (args) => <RatingStars {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalStars: 5,
  selectedStars: 0,
};

export const Hover = Template.bind({});
Hover.args = {
  totalStars: 5,
  selectedStars: 0,
};

export const Selected = Template.bind({});
Selected.args = {
  totalStars: 5,
  selectedStars: 3,
};

export const Inactive = Template.bind({});
Inactive.args = {
  totalStars: 5,
  selectedStars: 0,
};