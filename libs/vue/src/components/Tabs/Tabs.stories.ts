import Tabs from './Tabs.vue';

export default {
  title: 'Lists/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'array' },
    defaultActiveIndex: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: '<Tabs v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  defaultActiveIndex: 0,
};

export const Active = Template.bind({});
Active.args = {
  tabs: [
    { id: 1, label: 'Tab A' },
    { id: 2, label: 'Tab B' },
    { id: 3, label: 'Tab C' },
  ],
  defaultActiveIndex: 1,
};

export const Inactive = Template.bind({});
Inactive.args = {
  tabs: [
    { id: 1, label: 'Tab X' },
    { id: 2, label: 'Tab Y' },
    { id: 3, label: 'Tab Z' },
  ],
  defaultActiveIndex: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { id: 1, label: 'Tab 1', disabled: true },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  defaultActiveIndex: 0,
};

export const Hover = Template.bind({});
Hover.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  defaultActiveIndex: 0,
};