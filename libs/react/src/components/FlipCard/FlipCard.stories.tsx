import React from 'react';
import { Meta, Story } from '@storybook/react';
import FlipCard, { FlipCardProps } from './FlipCard';

export default {
  title: 'component/Cards/FlipCard',
  component: FlipCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FlipCardProps> = (args) => <FlipCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  frontContent: <div>Front Side</div>,
  backContent: <div>Back Side</div>,
};

export const Front = Template.bind({});
Front.args = {
  frontContent: <div>Front Side Content</div>,
  backContent: <div>Back Side Content</div>,
};

export const Back = Template.bind({});
Back.args = {
  frontContent: <div>Back Side Content</div>,
  backContent: <div>Front Side Content</div>,
};

export const Flipped = Template.bind({});
Flipped.args = {
  frontContent: <div>Flipped Front</div>,
  backContent: <div>Flipped Back</div>,
};

export const Hovered = Template.bind({});
Hovered.args = {
  frontContent: <div>Hover Front</div>,
  backContent: <div>Hover Back</div>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  frontContent: <div>Disabled Front</div>,
  backContent: <div>Disabled Back</div>,
  disabled: true,
};