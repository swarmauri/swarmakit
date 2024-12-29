import React from 'react';
import { Meta, Story } from '@storybook/react';
import TabBarNavigationMobile, { TabBarNavigationMobileProps } from './TabBarNavigationMobile';

export default {
  title: 'component/Navigation/TabBarNavigationMobile',
  component: TabBarNavigationMobile,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TabBarNavigationMobileProps> = (args) => <TabBarNavigationMobile {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Search' },
    { label: 'Profile' },
  ],
  onTabClick: (index) => console.log(`Tab ${index} clicked`),
};

export const Active = Template.bind({});
Active.args = {
  tabs: [
    { label: 'Home', isActive: true },
    { label: 'Search' },
    { label: 'Profile' },
  ],
  onTabClick: (index) => console.log(`Tab ${index} clicked`),
};

export const Hover = Template.bind({});
Hover.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Search', isActive: true },
    { label: 'Profile' },
  ],
  onTabClick: (index) => console.log(`Tab ${index} clicked`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Search', isDisabled: true },
    { label: 'Profile' },
  ],
  onTabClick: (index) => console.log(`Tab ${index} clicked`),
};