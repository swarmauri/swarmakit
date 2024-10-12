import ContextMenu from './ContextMenu.vue';

export default {
  title: 'Overlays/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  argTypes: {
    isVisible: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ContextMenu },
  setup() {
    return { args };
  },
  template: `
    <ContextMenu v-bind="args">
      <template #trigger>
        <button>Right-click or Tap-and-Hold here</button>
      </template>
      <template #content>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </template>
    </ContextMenu>
  `,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
};

export const RightClick = Template.bind({});
RightClick.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button');
  await userEvent.click(button, { button: 2 });
};

export const TapAndHold = Template.bind({});
TapAndHold.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button');
  await userEvent.pointer({ target: button, keys: '[TouchA>]' });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await userEvent.pointer({ target: button, keys: '[/TouchA]' });
};

export const Hover = Template.bind({});
Hover.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button');
  await userEvent.hover(button);
};