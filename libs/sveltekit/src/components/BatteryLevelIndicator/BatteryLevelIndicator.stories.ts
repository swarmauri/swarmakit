import BatteryLevelIndicator from './BatteryLevelIndicator.svelte';

export default {
  title: 'Components/Indicators/BatteryLevelIndicator',
  component: BatteryLevelIndicator,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'number' },
    isCharging: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: BatteryLevelIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  level: 100,
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