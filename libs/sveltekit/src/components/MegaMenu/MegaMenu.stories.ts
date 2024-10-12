import MegaMenu from './MegaMenu.svelte';

export default {
  title: 'Navigation/MegaMenu',
  component: MegaMenu,
  argTypes: {
    sections: { control: 'object' },
    isExpanded: { control: 'boolean' },
    activeSectionIndex: { control: 'number' },
    activeItemIndex: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: MegaMenu,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      title: 'Products',
      items: [
        { label: 'Laptops', action: () => alert('Laptops clicked') },
        { label: 'Phones', action: () => alert('Phones clicked') },
      ],
    },
    {
      title: 'Services',
      items: [
        { label: 'Consulting', action: () => alert('Consulting clicked') },
        { label: 'Support', action: () => alert('Support clicked') },
      ],
    },
  ],
  isExpanded: false,
  activeSectionIndex: null,
  activeItemIndex: null,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  isExpanded: true,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  isExpanded: true,
  activeSectionIndex: 0,
  activeItemIndex: 1,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isExpanded: true,
  activeSectionIndex: 1,
  activeItemIndex: 0,
};