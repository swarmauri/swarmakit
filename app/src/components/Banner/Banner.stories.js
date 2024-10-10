import React from 'react';
import Banner from './Banner';

export default {
  title: 'UI Layout/Banner',
  component: Banner,
  argTypes: {
    message: { control: 'text' },
    isDisplayed: { control: 'boolean' },
    showCTA: { control: 'boolean' },
  },
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default banner message.',
};

export const Displayed = Template.bind({});
Displayed.args = {
  message: 'This banner is displayed.',
  isDisplayed: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This banner is hidden.',
  isDisplayed: false,
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  message: 'This banner has a Call to Action.',
  isDisplayed: true,
  showCTA: true,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  message: 'This banner was dismissed.',
  isDisplayed: false,
  showCTA: true,
};