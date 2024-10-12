import CollapsibleMenuList from './CollapsibleMenuList.vue';

export default {
  title: 'Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    items: { control: 'object' },
    expanded: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { CollapsibleMenuList },
  setup() {
    return { args };
  },
  template: '<CollapsibleMenuList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Menu',
  items: ['Item 1', 'Item 2', 'Item 3'],
  expanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Menu',
  items: ['Item 1', 'Item 2', 'Item 3'],
  expanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Menu',
  items: ['Item 1', 'Item 2', 'Item 3'],
  expanded: false,
};

export const Hover = Template.bind({});
Hover.parameters = {
  pseudo: { hover: true },
};
Hover.args = {
  title: 'Menu',
  items: ['Item 1', 'Item 2', 'Item 3'],
  expanded: false,
};

export const Active = Template.bind({});
Active.parameters = {
  pseudo: { active: true },
};
Active.args = {
  title: 'Menu',
  items: ['Item 1', 'Item 2', 'Item 3'],
  expanded: false,
};