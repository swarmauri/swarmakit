import React from 'react';
import SplitView from './SplitView';

export default {
  title: 'UI Layout/SplitView',
  component: SplitView,
  argTypes: {
    leftSize: { control: 'number' },
    rightSize: { control: 'number' },
    visible: { control: 'boolean' },
  },
};

const Template = (args) => <SplitView {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftContent: <div>Left Pane</div>,
  rightContent: <div>Right Pane</div>,
  visible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  leftContent: <div>Visible Left Pane</div>,
  rightContent: <div>Visible Right Pane</div>,
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  leftContent: <div>Hidden Left Pane</div>,
  rightContent: <div>Hidden Right Pane</div>,
  visible: false,
};

export const Resized = Template.bind({});
Resized.args = {
  leftContent: <div>Resized Left Pane</div>,
  rightContent: <div>Resized Right Pane</div>,
  leftSize: 2,
  rightSize: 1,
  visible: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  leftContent: <div>Collapsed Left Pane</div>,
  rightContent: <div>Collapsed Right Pane</div>,
  leftSize: 0,
  rightSize: 1,
  visible: true,
};