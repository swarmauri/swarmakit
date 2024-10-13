import BatteryLevelIndicator from './BatteryLevelIndicator.svelte';

export default {
  title: 'Indicators/BatteryLevelIndicator',
  component: BatteryLevelIndicator,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    level: 100,
    isCharging: false,
  },
};

export const Charging = {
  args: {
    level: 50,
    isCharging: true,
  },
};

export const Full = {
  args: {
    level: 100,
    isCharging: false,
  },
};

export const LowBattery = {
  args: {
    level: 15,
    isCharging: false,
  },
};

export const Critical = {
  args: {
    level: 5,
    isCharging: false,
  },
};