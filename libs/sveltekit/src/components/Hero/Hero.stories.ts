import Hero from './Hero.svelte';
import type { HeroState } from './Hero.svelte';

export default {
  title: 'UI Layout/Hero',
  component: Hero,
  argTypes: {
    state: {
      control: 'select',
      options: ['displayed', 'hidden', 'withImage', 'withText', 'withCTA', 'fullscreen'],
    },
    imageSrc: { control: 'text' },
    text: { control: 'text' },
    ctaText: { control: 'text' },
  },
};

const Template = (args: { state: HeroState; imageSrc: string; text: string; ctaText: string }) => ({
  Component: Hero,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'displayed',
  imageSrc: 'https://via.placeholder.com/800x400',
  text: 'Welcome to our website',
  ctaText: 'Get Started',
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
  imageSrc: 'https://via.placeholder.com/800x400',
};

export const WithText = Template.bind({});
WithText.args = {
  state: 'withText',
  text: 'Welcome to our website',
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  state: 'withCTA',
  ctaText: 'Get Started',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  state: 'fullscreen',
  imageSrc: 'https://via.placeholder.com/800x400',
  text: 'Welcome to our website',
  ctaText: 'Get Started',
};