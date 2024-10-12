import SkeletonLoading from './SkeletonLoading.vue';

export default {
  title: 'Miscellaneous/SkeletonLoading',
  component: SkeletonLoading,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { SkeletonLoading },
  setup() {
    return { args };
  },
  template: `
    <SkeletonLoading v-bind="args">
      <div style="padding: 16px; background-color: #f8f8f8;">
        Content loaded
      </div>
    </SkeletonLoading>
  `,
});

export const Default = Template.bind({});
Default.args = {
  loading: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Active = Template.bind({});
Active.args = {
  loading: false,
};