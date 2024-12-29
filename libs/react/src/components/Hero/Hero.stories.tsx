import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hero, { HeroProps } from './Hero';

export default {
  title: 'component/UI Layout/Hero',
  component: Hero,
  tags: ['autodocs'],
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'displayed',
};

export const Displayed = Template.bind({});
Displayed.args = {
  state: 'displayed',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};

export const WithImage = Template.bind({});
WithImage.args = {
  state: 'withImage',
  imageUrl: 'https://via.placeholder.com/800x400',
};

export const WithText = Template.bind({});
WithText.args = {
  state: 'withText',
  text: 'Welcome to Our Website!',
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  state: 'withCTA',
  ctaText: 'Get Started',
  onCtaClick: () => alert('CTA clicked!'),
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  state: 'fullscreen',
  imageUrl: 'https://via.placeholder.com/1600x800',
  text: 'Experience Fullscreen',
  ctaText: 'Learn More',
  onCtaClick: () => alert('CTA clicked!'),
};