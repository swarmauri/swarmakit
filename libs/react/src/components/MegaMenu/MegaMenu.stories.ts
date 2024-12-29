import React from 'react';
import { Meta, Story } from '@storybook/react';
import MegaMenu, { MegaMenuProps } from './MegaMenu';

export default {
  title: 'component/Navigation/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MegaMenuProps> = (args) => <MegaMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Services', onClick: () => alert('Services clicked'), subItems: [
      { label: 'Consulting', onClick: () => alert('Consulting clicked') },
      { label: 'Development', onClick: () => alert('Development clicked') },
    ]},
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Services', onClick: () => alert('Services clicked'), subItems: [
      { label: 'Consulting', onClick: () => alert('Consulting clicked') },
      { label: 'Development', onClick: () => alert('Development clicked') },
    ]},
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Services', onClick: () => alert('Services clicked'), subItems: [
      { label: 'Consulting', onClick: () => alert('Consulting clicked') },
      { label: 'Development', onClick: () => alert('Development clicked') },
    ]},
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const Active = Template.bind({});
Active.args = {
  expanded: false,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Services', onClick: () => alert('Services clicked'), subItems: [
      { label: 'Consulting', onClick: () => alert('Consulting clicked') },
      { label: 'Development', onClick: () => alert('Development clicked') },
    ]},
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};