import Sidebars from './Sidebars.vue';

export default {
  title: 'Navigation/Sidebars',
  component: Sidebars,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { Sidebars },
  setup() {
    return { args };
  },
  template: `
    <Sidebars v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Section 1', subItems: ['Subsection 1-1', 'Subsection 1-2'] },
    { label: 'Section 2', subItems: ['Subsection 2-1', 'Subsection 2-2'] },
    { label: 'Section 3', subItems: ['Subsection 3-1', 'Subsection 3-2'] },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: Default.args.items,
};
Expanded.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Section 1');
  await userEvent.click(button);
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: Default.args.items,
};

export const Hover = Template.bind({});
Hover.args = {
  items: Default.args.items,
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Section 2');
  await userEvent.hover(button);
};