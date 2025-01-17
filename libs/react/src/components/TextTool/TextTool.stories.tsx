import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextTool, { TextToolProps } from './TextTool';

export default {
  title: 'component/Drawing/TextTool',
  component: TextTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TextToolProps> = (args) => <TextTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  onAddText: (text, options) => console.log(`Added text: ${text} with options`, options),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true,
};

export const TextAdded = Template.bind({});
TextAdded.args = {
  ...Active.args,
};

export const TextEdited = Template.bind({});
TextEdited.args = {
  ...Active.args,
};