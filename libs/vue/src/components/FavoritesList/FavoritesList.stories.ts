import FavoritesList from './FavoritesList.vue';

export default {
  title: 'Lists/FavoritesList',
  component: FavoritesList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { FavoritesList },
  setup() {
    return { args };
  },
  template: '<FavoritesList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const Starred = Template.bind({});
Starred.args = {
  ...Default.args,
};

export const Unstarred = Template.bind({});
Unstarred.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};