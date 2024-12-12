import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScrollableHorizontalNavigation, { ScrollableHorizontalNavigationProps } from './ScrollableHorizontalNavigation';

export default {
  title: 'component/Navigation/ScrollableHorizontalNavigation',
  component: ScrollableHorizontalNavigation,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ScrollableHorizontalNavigationProps> = (args) => <ScrollableHorizontalNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Services', onClick: () => alert('Services clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Services', onClick: () => alert('Services clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
    { label: 'Blog', onClick: () => alert('Blog clicked') },
    { label: 'Careers', onClick: () => alert('Careers clicked') },
    { label: 'Support', onClick: () => alert('Support clicked') },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Services', onClick: () => alert('Services clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Services', onClick: () => alert('Services clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};