import React, { useState } from 'react';
import TabBarNavigationMobile from './TabBarNavigationMobile';

export default {
  title: 'Navigation/TabBarNavigationMobile',
  component: TabBarNavigationMobile,
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState(args.activeTab);
  return <TabBarNavigationMobile {...args} activeTab={activeTab} onTabClick={setActiveTab} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Search' },
    { label: 'Notifications' },
    { label: 'Profile' },
  ],
  activeTab: 0,
};

export const Active = Template.bind({});
Active.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Search' },
    { label: 'Notifications' },
    { label: 'Profile' },
  ],
  activeTab: 1,
};

export const Hover = Template.bind({});
Hover.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Search' },
    { label: 'Notifications' },
    { label: 'Profile' },
  ],
  activeTab: 0,
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { label: 'Home', disabled: true },
    { label: 'Search' },
    { label: 'Notifications' },
    { label: 'Profile' },
  ],
  activeTab: 0,
};