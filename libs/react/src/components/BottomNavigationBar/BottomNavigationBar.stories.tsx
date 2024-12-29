import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import BottomNavigationBar, { BottomNavigationBarProps } from './BottomNavigationBar';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

export default {
  title: 'component/Navigation/BottomNavigationBar',
  component: BottomNavigationBar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BottomNavigationBarProps> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return <BottomNavigationBar {...args} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Search', icon: <FaSearch /> },
    { label: 'Profile', icon: <FaUser /> },
  ],
  selectedIndex: 0,
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Search', icon: <FaSearch /> },
    { label: 'Profile', icon: <FaUser /> },
  ],
  selectedIndex: 1,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Search', icon: <FaSearch /> },
    { label: 'Profile', icon: <FaUser /> },
  ],
  selectedIndex: 0,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Home', icon: <FaHome />, disabled: true },
    { label: 'Search', icon: <FaSearch /> },
    { label: 'Profile', icon: <FaUser /> },
  ],
  selectedIndex: 0,
};