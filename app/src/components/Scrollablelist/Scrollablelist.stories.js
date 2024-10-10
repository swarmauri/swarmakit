import React from 'react';
import Scrollablelist from './Scrollablelist';

export default {
  title: 'Lists/Scrollablelist',
  component: Scrollablelist,
};

const Template = (args) => <Scrollablelist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  disabled: false,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  ...Default.args,
};
Scrolling.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const scrollContainer = canvas.getByRole('list');
  await userEvent.scroll(scrollContainer, { top: 150 });
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  ...Default.args,
  items: Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};