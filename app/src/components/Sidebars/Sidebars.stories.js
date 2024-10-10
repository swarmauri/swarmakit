import React from 'react';
import Sidebars from './Sidebars';

export default {
  title: 'Navigation/Sidebars',
  component: Sidebars,
};

const Template = (args) => <Sidebars {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'Dashboard' },
    { name: 'Settings' },
    { name: 'Profile' },
    { name: 'Logout' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    { name: 'Dashboard' },
    { name: 'Settings' },
    { name: 'Profile' },
    { name: 'Logout' },
  ],
};

Expanded.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Expand');
  await userEvent.click(button);
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    { name: 'Dashboard' },
    { name: 'Settings' },
    { name: 'Profile' },
    { name: 'Logout' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { name: 'Dashboard' },
    { name: 'Settings' },
    { name: 'Profile' },
    { name: 'Logout' },
  ],
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const firstItem = await canvas.getByText('Dashboard');
  await userEvent.hover(firstItem);
};