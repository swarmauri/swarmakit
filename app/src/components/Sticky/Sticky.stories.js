import React from 'react';
import Sticky from './Sticky';

export default {
  title: 'Navigation/Sticky',
  component: Sticky,
};

const Template = (args) => <Sticky {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <div>Sticky Content</div>,
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  content: <div>Sticky Content</div>,
};

Scrolled.play = async ({ canvasElement }) => {
  window.scrollTo(0, 100);
};

export const Expanded = Template.bind({});
Expanded.args = {
  content: <div>Sticky Content</div>,
};

Expanded.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Expand');
  await userEvent.click(button);
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  content: <div>Sticky Content</div>,
};