/** @jsx js */
import React from 'react';
import ProfileOverviewBioNameLocation from './ProfileOverviewBioNameLocation';

export default {
  title: 'Components/ProfileOverviewBioNameLocation',
  component: ProfileOverviewBioNameLocation,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    bio: { control: 'text' },
    location: { control: 'text' },
  },
};

const Template = (args) => <ProfileOverviewBioNameLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Jane Doe',
  bio: 'A curious learner and avid traveler.',
  location: 'New York, USA',
};

export const LongBio = Template.bind({});
LongBio.args = {
  ...Default.args,
  bio: 'A passionate software developer with over 10 years of experience in creating dynamic web applications. Loves hiking, photography, and exploring new technologies.',
};

export const NoLocation = Template.bind({});
NoLocation.args = {
  ...Default.args,
  location: '',
};