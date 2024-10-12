import LiveStreamPlayer from './LiveStreamPlayer.svelte';

export default {
  title: 'Media/LiveStreamPlayer',
  component: LiveStreamPlayer,
  argTypes: {
    isLive: { control: 'boolean' },
    isPaused: { control: 'boolean' },
    isBuffering: { control: 'boolean' },
    isMuted: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: LiveStreamPlayer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isLive: true,
  isPaused: false,
  isBuffering: false,
  isMuted: false,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  isPaused: true,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
  isBuffering: true,
};

export const Muted = Template.bind({});
Muted.args = {
  ...Default.args,
  isMuted: true,
};