import React from 'react';
import { Meta, Story } from '@storybook/react';
import BatteryLevelIndicator from './BatteryLevelIndicator';

export default {
  title: 'component/Indicators/BatteryLevelIndicator',
  component: BatteryLevelIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <BatteryLevelIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 50,
  isCharging: false,
};

export const Charging = Template.bind({});
Charging.args = {
  level: 50,
  isCharging: true,
};

export const Full = Template.bind({});
Full.args = {
  level: 100,
  isCharging: false,
};

export const LowBattery = Template.bind({});
LowBattery.args = {
  level: 20,
  isCharging: false,
};

export const Critical = Template.bind({});
Critical.args = {
  level: 5,
  isCharging: false,
};