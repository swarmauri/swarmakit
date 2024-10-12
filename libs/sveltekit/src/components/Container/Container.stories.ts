import Container from './Container.svelte';
import type { ContainerState } from './Container.svelte';

export default {
  title: 'UI Layout/Container',
  component: Container,
  argTypes: {
    state: {
      control: 'select',
      options: ['fluid', 'fixed', 'centered', 'fullWidth'],
    },
  },
};

const Template = (args: { state: ContainerState }) => ({
  Component: Container,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'fluid',
};

export const Fluid = Template.bind({});
Fluid.args = {
  state: 'fluid',
};

export const Fixed = Template.bind({});
Fixed.args = {
  state: 'fixed',
};

export const Centered = Template.bind({});
Centered.args = {
  state: 'centered',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  state: 'fullWidth',
};