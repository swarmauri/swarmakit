import UndoRedoButtons from './UndoRedoButtons.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'component/Drawing/UndoRedoButtons',
  component: UndoRedoButtons,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => ({
  components: { UndoRedoButtons },
  setup() {
    return { args };
  },
  template: '<UndoRedoButtons v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  canUndo: false,
  canRedo: false,
};

export const UndoAvailable = Template.bind({});
UndoAvailable.args = {
  canUndo: true,
  canRedo: false,
};

export const RedoAvailable = Template.bind({});
RedoAvailable.args = {
  canUndo: false,
  canRedo: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  canUndo: false,
  canRedo: false,
};