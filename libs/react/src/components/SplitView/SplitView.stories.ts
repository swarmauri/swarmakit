import React from 'react';
import { Meta, Story } from '@storybook/react';
import SplitView, { SplitViewProps } from './SplitView';

export default {
  title: 'component/UI Layout/SplitView',
  component: SplitView,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SplitViewProps> = (args) => <SplitView {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  leftContent: <div>Left Content</div>,
  rightContent: <div>Right Content</div>,
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  leftContent: <div>Visible Left Content</div>,
  rightContent: <div>Visible Right Content</div>,
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  leftContent: <div>Hidden Left Content</div>,
  rightContent: <div>Hidden Right Content</div>,
};

export const Resized = Template.bind({});
Resized.args = {
  state: 'resized',
  leftContent: <div>Resized Left Content</div>,
  rightContent: <div>Resized Right Content</div>,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  leftContent: <div>Collapsed Left Content</div>,
  rightContent: <div>Collapsed Right Content</div>,
};