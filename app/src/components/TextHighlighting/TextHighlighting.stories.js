import React from 'react';
import TextHighlighting from './TextHighlighting';

export default {
  title: 'Components/TextHighlighting',
  component: TextHighlighting,
  argTypes: {
    className: { control: 'text' },
  },
};

const Template = (args) => <TextHighlighting {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Storybook is an open source tool for building UI components.',
  highlight: 'open source',
  className: '',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-text-highlight',
};