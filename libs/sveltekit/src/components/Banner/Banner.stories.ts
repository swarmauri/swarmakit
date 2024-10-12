import Banner from './Banner.svelte';
import type { BannerState } from './Banner.svelte';

export default {
  title: 'UI Layout/Banner',
  component: Banner,
  argTypes: {
    state: {
      control: 'select',
      options: ['displayed', 'hidden', 'withCTA', 'dismissed'],
    },
    message: { control: 'text' },
    ctaLabel: { control: 'text' },
  },
};

const Template = (args: { state: BannerState; message: string; ctaLabel: string }) => ({
  Component: Banner,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'displayed',
  message: 'This is the default banner message.',
  ctaLabel: 'Learn More',
};

export const Displayed = Template.bind({});
Displayed.args = {
  state: 'displayed',
  message: 'This banner is displayed.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  message: 'This banner is hidden.',
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  state: 'withCTA',
  message: 'This banner has a call to action.',
  ctaLabel: 'Act Now',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  state: 'dismissed',
  message: 'This banner has been dismissed.',
};