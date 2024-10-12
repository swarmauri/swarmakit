import Accordion from './Accordion.vue';

export default {
  title: 'Lists/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    open: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Accordion },
  setup() {
    return { args };
  },
  template: '<Accordion v-bind="args">Content goes here</Accordion>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  open: false,
};

export const Open = Template.bind({});
Open.args = {
  title: 'Accordion Title',
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  title: 'Accordion Title',
  open: false,
};

export const Hover = Template.bind({});
Hover.args = {
  title: 'Accordion Title',
  open: false,
};