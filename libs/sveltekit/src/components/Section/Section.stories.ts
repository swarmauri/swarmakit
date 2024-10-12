import Section from './Section.svelte';
import type { SectionState } from './Section.svelte';

export default {
  title: 'UI Layout/Section',
  component: Section,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'expanded', 'collapsed'],
    },
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args: { state: SectionState; title: string; content: string }) => ({
  Component: Section,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  title: 'Default Section Title',
  content: 'This is the default section content.',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  title: 'Visible Section',
  content: 'This section is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  title: 'Hidden Section',
  content: 'This section is hidden.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  title: 'Expanded Section',
  content: 'This section is expanded.',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  title: 'Collapsed Section',
  content: 'This section is collapsed.',
};