import EmbeddedMediaIframe from './EmbeddedMediaIframe.svelte';

export default {
  title: 'Media/EmbeddedMediaIframe',
  component: EmbeddedMediaIframe,
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    isFullscreen: { control: 'boolean' },
    isBuffering: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: EmbeddedMediaIframe,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  title: 'Example Video',
  isFullscreen: false,
  isBuffering: false,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
  isFullscreen: true,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
  isBuffering: true,
};