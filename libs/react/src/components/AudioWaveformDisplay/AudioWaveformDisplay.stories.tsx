import React from 'react';
import { Meta, Story } from '@storybook/react';
import AudioWaveformDisplay, { AudioWaveformDisplayProps } from './AudioWaveformDisplay';

export default {
  title: 'component/Media/AudioWaveformDisplay',
  component: AudioWaveformDisplay,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AudioWaveformDisplayProps> = (args) => <AudioWaveformDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/audio/sample.mp3',
};

export const Playing = Template.bind({});
Playing.args = {
  ...Default.args,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
};

export const Scrubbing = Template.bind({});
Scrubbing.args = {
  ...Default.args,
};