// TextToSpeech.stories.js
import React from 'react';
import TextToSpeech from './TextToSpeech';

export default {
  title: 'Components/TextToSpeech',
  component: TextToSpeech,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    onSpeakStart: { action: 'speak started' },
    onSpeakEnd: { action: 'speak ended' },
  },
};

const Template = (args) => <TextToSpeech {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello world!',
};