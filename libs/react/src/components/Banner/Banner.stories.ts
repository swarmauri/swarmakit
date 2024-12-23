import React from 'react';
import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps } from './Banner';

export default {
  title: 'component/UI Layout/Banner',
  component: Banner,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'displayed',
  message: 'This is a default banner message.',
};

export const Displayed = Template.bind({});
Displayed.args = {
  state: 'displayed',
  message: 'This is a displayed banner.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  message: 'This banner is hidden.',
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  state: 'withCTA',
  message: 'This banner has a Call to Action.',
  ctaLabel: 'Click Here',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  state: 'dismissed',
  message: 'This banner was dismissed.',
};