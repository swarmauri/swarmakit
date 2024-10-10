// SpeechToText.stories.js
import React from 'react';
import SpeechToText from './SpeechToText';

export default {
  title: 'Components/SpeechToText',
  component: SpeechToText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onTranscript: { action: 'transcript received' },
    onError: { action: 'error occurred' },
  },
};

const Template = (args) => <SpeechToText {...args} />;

export const Default = Template.bind({});
Default.args = {};