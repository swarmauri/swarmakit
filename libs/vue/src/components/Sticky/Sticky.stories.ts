import Sticky from './Sticky.vue';

export default {
  title: 'Navigation/Sticky',
  component: Sticky,
  tags: ['autodocs'],
  argTypes: {
    isExpanded: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Sticky },
  setup() {
    return { args };
  },
  template: `
    <Sticky v-bind="args">
      <template #header>Sticky Header</template>
      <template #content>Sticky Content</template>
    </Sticky>
  `,
});

export const Default = Template.bind({});
Default.args = {
  isExpanded: true,
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  isExpanded: true,
};
Scrolled.play = async () => {
  window.scrollTo(0, 100);
};

export const Expanded = Template.bind({});
Expanded.args = {
  isExpanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  isExpanded: false,
};