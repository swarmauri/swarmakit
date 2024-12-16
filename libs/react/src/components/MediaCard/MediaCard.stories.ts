import React from 'react';
import { Meta, Story } from '@storybook/react';
import MediaCard, { MediaCardProps } from './MediaCard';

export default {
  title: 'component/Card Types/MediaCard',
  component: MediaCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MediaCardProps> = (args) => <MediaCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Media Card Title',
  description: 'This is a description for the media card.',
  mediaUrl: 'https://via.placeholder.com/300',
  mediaType: 'image',
  caption: 'Sample Image',
  expandable: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  title: 'Media Card Title',
  description: 'This is a description for the media card.',
  mediaUrl: 'https://via.placeholder.com/300',
  mediaType: 'image',
  caption: 'Sample Image',
  expandable: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Media Card Title',
  description: 'This is a description for the media card.',
  mediaUrl: 'https://via.placeholder.com/300',
  mediaType: 'image',
  caption: 'Sample Image',
  expandable: true,
};