import BottomNavigationBar from './BottomNavigationBar.vue';

export default {
  title: 'Navigation/BottomNavigationBar',
  component: BottomNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    selectedIndex: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { BottomNavigationBar },
  setup() {
    return { args };
  },
  template: `
    <BottomNavigationBar v-bind="args" @update:selectedIndex="args.selectedIndex = $event" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { icon: '🏠', label: 'Home' },
    { icon: '🔍', label: 'Search' },
    { icon: '❤️', label: 'Favorites' },
    { icon: '👤', label: 'Profile' },
  ],
  selectedIndex: 0,
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { icon: '🏠', label: 'Home' },
    { icon: '🔍', label: 'Search' },
    { icon: '❤️', label: 'Favorites' },
    { icon: '👤', label: 'Profile' },
  ],
  selectedIndex: 2,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { icon: '🏠', label: 'Home' },
    { icon: '🔍', label: 'Search' },
    { icon: '❤️', label: 'Favorites' },
    { icon: '👤', label: 'Profile' },
  ],
  selectedIndex: 0,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { icon: '🏠', label: 'Home' },
    { icon: '🔍', label: 'Search', disabled: true },
    { icon: '❤️', label: 'Favorites' },
    { icon: '👤', label: 'Profile' },
  ],
  selectedIndex: 0,
};