import React from 'react';
import DrawerOffCanvasMenu from './DrawerOffCanvasMenu';

export default {
  title: 'Components/DrawerOffCanvasMenu',
  component: DrawerOffCanvasMenu,
  argTypes: {
    position: { control: 'select', options: ['left', 'right'] },
    width: { control: 'text' },
  },
};

const Template = (args) => <DrawerOffCanvasMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuContent: <div style={{ padding: '20px' }}>Menu Content</div>,
  position: 'left',
  width: '250px',
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  menuContent: <div style={{ padding: '20px' }}>Menu Content</div>,
  position: 'right',
  width: '250px',
};