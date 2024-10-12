import SearchBox from './SearchBox.vue';

export default {
  title: 'Chat/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { SearchBox },
  setup() {
    return { args };
  },
  template: `
    <SearchBox v-bind="args" @update:value="onUpdateValue" />
  `,
  methods: {
    onUpdateValue(newValue: string) {
      console.log(`Value updated: ${newValue}`);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Search...',
};

export const Focused = Template.bind({});
Focused.args = {
  value: 'Focused state',
  placeholder: 'Search...',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  value: '',
  placeholder: 'Search...',
};

export const Typing = Template.bind({});
Typing.args = {
  value: 'Typing...',
  placeholder: 'Search...',
};

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: 'Search...',
};