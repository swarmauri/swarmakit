import Accordion from './Accordion.svelte';
import type { AccordionState } from './Accordion.svelte';

export default {
  title: 'Lists/Accordion',
  component: Accordion,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(AccordionState),
    },
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: Accordion,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: AccordionState.Closed,
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Open = Template.bind({});
Open.args = {
  state: AccordionState.Open,
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Closed = Template.bind({});
Closed.args = {
  state: AccordionState.Closed,
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Hover = Template.bind({});
Hover.args = {
  state: AccordionState.Hover,
  title: 'Accordion Title',
  content: 'Accordion Content',
};