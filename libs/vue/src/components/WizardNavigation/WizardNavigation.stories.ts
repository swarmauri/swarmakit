import WizardNavigation from './WizardNavigation.vue';

export default {
  title: 'Navigation/WizardNavigation',
  component: WizardNavigation,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { WizardNavigation },
  setup() {
    return { args };
  },
  template: `<WizardNavigation />`,
});

export const Default = Template.bind({});

export const Completed = Template.bind({});
Completed.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Step 1/i });
  await userEvent.click(button);
};

export const CurrentStep = Template.bind({});
CurrentStep.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Step 2/i });
  await userEvent.click(button);
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: [
    { label: 'Step 1', isCompleted: true, isCurrent: false, isDisabled: false },
    { label: 'Step 2', isCompleted: true, isCurrent: false, isDisabled: false },
    { label: 'Step 3', isCompleted: false, isCurrent: true, isDisabled: false },
    { label: 'Step 4', isCompleted: false, isCurrent: false, isDisabled: true },
  ],
};