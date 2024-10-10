import React from 'react';
import EmbeddedMediaIframe from './EmbeddedMediaIframe';

export default {
  title: 'Media/EmbeddedMediaIframe',
  component: EmbeddedMediaIframe,
};

const Template = (args) => <EmbeddedMediaIframe {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  title: 'Default Video',
  allowFullScreen: true,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
  allowFullScreen: true,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
  isBuffering: true,
};