import React from 'react';
import { Meta, Story } from '@storybook/react';
import EmbeddedMediaIframe, { EmbeddedMediaIframeProps } from './EmbeddedMediaIframe';

export default {
  title: 'component/Media/EmbeddedMediaIframe',
  component: EmbeddedMediaIframe,
  tags: ['autodocs'],
} as Meta;

const Template: Story<EmbeddedMediaIframeProps> = (args) => <EmbeddedMediaIframe {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  title: 'Embedded Video',
  width: '560px',
  height: '315px',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
  allowFullscreen: true,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
};