import React from 'react';
import SplitScreenLayout from './SplitScreenLayout';

export default {
  title: 'Components/SplitScreenLayout',
  component: SplitScreenLayout,
  argTypes: {
    leftWidth: { control: 'text' },
    rightWidth: { control: 'text' },
  },
};

const Template = (args) => <SplitScreenLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftContent: <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>Left Pane</div>,
  rightContent: <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>Right Pane</div>,
  leftWidth: '50%',
  rightWidth: '50%',
};

export const UnequalSplit = Template.bind({});
UnequalSplit.args = {
  leftContent: <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>Left Pane</div>,
  rightContent: <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>Right Pane</div>,
  leftWidth: '30%',
  rightWidth: '70%',
};