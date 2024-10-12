import AccordionList from './AccordionList.svelte';
import type { AccordionListState } from './AccordionList.svelte';

export default {
  title: 'Lists/AccordionList',
  component: AccordionList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(AccordionListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: AccordionList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: AccordionListState.Collapsed,
  items: [
    { title: 'Item 1', content: 'Content 1', isOpen: false },
    { title: 'Item 2', content: 'Content 2', isOpen: false },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: AccordionListState.Expanded,
  items: [
    { title: 'Item 1', content: 'Content 1', isOpen: true },
    { title: 'Item 2', content: 'Content 2', isOpen: true },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: AccordionListState.Collapsed,
  items: [
    { title: 'Item 1', content: 'Content 1', isOpen: false },
    { title: 'Item 2', content: 'Content 2', isOpen: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: AccordionListState.Hover,
  items: [
    { title: 'Item 1', content: 'Content 1', isOpen: false },
    { title: 'Item 2', content: 'Content 2', isOpen: false },
  ],
};