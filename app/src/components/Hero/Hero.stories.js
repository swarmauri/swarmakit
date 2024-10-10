import React from 'react';
import Hero from './Hero';

export default {
  title: 'UI Layout/Hero',
  component: Hero,
  argTypes: {
    isDisplayed: { control: 'boolean' },
    image: { control: 'text' },
    text: { control: 'text' },
    cta: { control: 'text' },
    fullscreen: { control: 'boolean' },
  },
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDisplayed: true,
  image: '',
  text: 'Welcome to our site!',
  cta: 'Learn More',
  fullscreen: false,
};

export const Displayed = Template.bind({});
Displayed.args = {
  isDisplayed: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isDisplayed: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  image: 'https://via.placeholder.com/1500',
};

export const WithText = Template.bind({});
WithText.args = {
  text: 'Explore our features',
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  cta: 'Get Started',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  fullscreen: true,
};