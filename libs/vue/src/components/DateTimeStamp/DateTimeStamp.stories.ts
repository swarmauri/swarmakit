import DateTimeStamp from './DateTimeStamp.vue';

export default {
  title: 'Chat/DateTimeStamp',
  component: DateTimeStamp,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['displayed', 'hidden'],
    },
    dateTime: {
      control: 'text',
    },
  },
};

const Template = (args: any) => ({
  components: { DateTimeStamp },
  setup() {
    return { args };
  },
  template: `
    <DateTimeStamp v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  dateTime: new Date().toISOString(),
  state: 'displayed',
};

export const Displayed = Template.bind({});
Displayed.args = {
  ...Default.args,
  state: 'displayed',
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  state: 'hidden',
};