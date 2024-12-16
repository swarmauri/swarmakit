import React from 'react';
import { Meta, Story } from '@storybook/react';
import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export default {
  title: 'component/Navigation/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DropdownMenuProps> = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Active = Template.bind({});
Active.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};