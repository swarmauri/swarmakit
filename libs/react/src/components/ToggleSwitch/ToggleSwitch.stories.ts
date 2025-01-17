import React from 'react';
import { Meta, Story } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'component/Forms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <ToggleSwitch {...args} />;

export const On = Template.bind({});
On.args = {
  checked: true,
  onChange: (checked: boolean) => console.log(`ToggleSwitch is now: ${checked ? 'On' : 'Off'}`),
};

export const Off = Template.bind({});
Off.args = {
  checked: false,
  onChange: (checked: boolean) => console.log(`ToggleSwitch is now: ${checked ? 'On' : 'Off'}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};