import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import ContextualNavigation, { ContextualNavigationProps } from './ContextualNavigation';

export default {
  title: 'component/Navigation/ContextualNavigation',
  component: ContextualNavigation,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ContextualNavigationProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <ContextualNavigation
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  items: [
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Logout', onClick: () => alert('Logout clicked') },
  ],
};

export const ContextTriggered = Template.bind({});
ContextTriggered.args = {
  isOpen: true,
  items: [
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Logout', onClick: () => alert('Logout clicked') },
  ],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  isOpen: false,
  items: [
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Logout', onClick: () => alert('Logout clicked') },
  ],
};