import React from 'react';
import OffCanvasNavigation from './Off-CanvasNavigation';

export default {
  title: 'Navigation/OffCanvasNavigation',
  component: OffCanvasNavigation,
};

const Template = (args) => <OffCanvasNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Hidden = Template.bind({});
Hidden.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Visible = Template.bind({});
Visible.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Active = Template.bind({});
Active.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};