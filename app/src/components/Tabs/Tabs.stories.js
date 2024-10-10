import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: 'object' },
  },
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ],
};

export const SingleTab = Template.bind({});
SingleTab.args = {
  tabs: [
    { label: 'Only Tab', content: 'Content for the only tab' },
  ],
};

export const DynamicContent = Template.bind({});
DynamicContent.args = {
  tabs: [
    { label: 'About', content: <div><h2>About Us</h2><p>Some dynamic content here.</p></div> },
    { label: 'Services', content: <div><h2>Our Services</h2><p>Details about services offered.</p></div> },
    { label: 'Contact', content: <div><h2>Contact Us</h2><p>Contact form or information here.</p></div> },
  ],
};