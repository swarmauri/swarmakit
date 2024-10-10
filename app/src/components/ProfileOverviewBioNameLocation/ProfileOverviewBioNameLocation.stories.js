import React from 'react';
import ProfileOverviewBioNameLocation from './ProfileOverviewBioNameLocation';

export default {
  title: 'Components/ProfileOverviewBioNameLocation',
  component: ProfileOverviewBioNameLocation,
  argTypes: {
    name: { control: 'text' },
    bio: { control: 'text' },
    location: { control: 'text' },
  },
};

const Template = (args) => <ProfileOverviewBioNameLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  bio: 'A passionate developer.',
  location: 'New York, USA',
};

export const NoLocation = Template.bind({});
NoLocation.args = {
  name: 'Jane Doe',
  bio: 'Loves creating beautiful UIs.',
  location: '',
};