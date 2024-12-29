import React from 'react';
import { Meta, Story } from '@storybook/react';
import ImageChoicePoll, { ImageChoicePollProps } from './ImageChoicePoll';

export default {
  title: 'component/Polls/ImageChoicePoll',
  component: ImageChoicePoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ImageChoicePollProps> = (args) => <ImageChoicePoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Which image do you like the most?',
  options: [
    { id: 1, src: 'path/to/image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'path/to/image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'path/to/image3.jpg', alt: 'Image 3' },
  ],
  disabled: false,
  showResults: false,
  onChoiceChange: () => {},
};

export const Unanswered = Template.bind({});
Unanswered.args = {
  ...Default.args,
  disabled: false,
  showResults: false,
};

export const Answered = Template.bind({});
Answered.args = {
  ...Default.args,
  onChoiceChange: (selectedId) => console.log(`Selected image ID: ${selectedId}`),
};

export const ResultsVisible = Template.bind({});
ResultsVisible.args = {
  ...Default.args,
  showResults: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};