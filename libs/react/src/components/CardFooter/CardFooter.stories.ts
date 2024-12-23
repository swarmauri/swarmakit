import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardFooter, { CardFooterProps } from './CardFooter';

export default {
  title: 'component/Card Elements/CardFooter',
  component: CardFooter,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardFooterProps> = (args) => <CardFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <span>Default Footer Content</span>,
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  children: (
    <>
      <button>Button 1</button>
      <button>Button 2</button>
    </>
  ),
  align: 'center',
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  children: (
    <>
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
    </>
  ),
  align: 'right',
};

export const Hovered = Template.bind({});
Hovered.args = {
  children: <span>Hover over this content</span>,
};