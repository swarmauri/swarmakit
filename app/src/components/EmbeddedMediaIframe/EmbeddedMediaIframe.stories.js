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
  allowFullscreen: false,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
  allowFullscreen: true,
};

export const Buffering = Template.bind({});
Buffering.args = {
  src: 'https://www.example.com/loading',
  allowFullscreen: false,
};