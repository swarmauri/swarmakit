import Avatar from './Avatar.vue';

export default {
  title: 'Miscellaneous/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    imageSource: { control: 'text' },
    altText: { control: 'text' },
    initials: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  imageSource: 'path/to/avatar.jpg',
  altText: 'User avatar',
  initials: '',
};

export const WithImage = Template.bind({});
WithImage.args = {
  imageSource: 'path/to/avatar.jpg',
  altText: 'User avatar',
  initials: '',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  imageSource: '',
  altText: '',
  initials: 'JD',
};

export const Grouped = () => ({
  components: { Avatar },
  template: `
    <div style="display: flex; gap: 10px;">
      <Avatar imageSource="path/to/avatar1.jpg" altText="User 1" />
      <Avatar imageSource="path/to/avatar2.jpg" altText="User 2" />
      <Avatar initials="AB" />
    </div>
  `,
});