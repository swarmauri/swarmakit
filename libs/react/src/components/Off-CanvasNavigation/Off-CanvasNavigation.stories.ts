import React from 'react';
import { Meta, Story } from '@storybook/react';
import OffCanvasNavigation, { OffCanvasNavigationProps } from './Off-CanvasNavigation';

export default {
  title: 'component/Navigation/Off-CanvasNavigation',
  component: OffCanvasNavigation,
  tags: ['autodocs'],
} as Meta;

const Template: Story<OffCanvasNavigationProps> = (args) => <OffCanvasNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const Active = Template.bind({});
Active.args = {
  isVisible: true,
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  isVisible: false,
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};