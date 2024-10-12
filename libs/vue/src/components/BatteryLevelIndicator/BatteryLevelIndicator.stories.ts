import BatteryLevelIndicator from './BatteryLevelIndicator.vue';

export default {
  title: 'Indicators/BatteryLevelIndicator',
  component: BatteryLevelIndicator,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'number' },
      description: 'The current battery level as a percentage',
    },
    isCharging: {
      control: { type: 'boolean' },
      description: 'Indicates if the battery is currently charging',
    },
  },
};

const Template = (args: any) => ({
  components: { BatteryLevelIndicator },
  setup() {
    return { args };
  },
  template: '<BatteryLevelIndicator v-bind="args" />',
});

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
  level: 30,
  isCharging: false,
};

export const Critical = Template.bind({});
Critical.args = {
  level: 10,
  isCharging: false,
};