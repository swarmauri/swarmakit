import ContextMenu from './ContextMenu.svelte';

export default {
  title: 'Overlays/ContextMenu',
  component: ContextMenu,
  argTypes: {
    isVisible: { control: 'boolean' },
    menuItems: { control: 'array' },
    position: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: ContextMenu,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  menuItems: [
    { label: 'Option 1', action: () => console.log('Option 1 selected') },
    { label: 'Option 2', action: () => console.log('Option 2 selected') },
  ],
  position: { x: 0, y: 0 },
};

export const RightClick = Template.bind({});
RightClick.args = {
  isVisible: true,
  menuItems: [
    { label: 'Option 1', action: () => console.log('Option 1 selected') },
    { label: 'Option 2', action: () => console.log('Option 2 selected') },
  ],
  position: { x: 100, y: 100 },
};

export const TapAndHold = Template.bind({});
TapAndHold.args = {
  isVisible: true,
  menuItems: [
    { label: 'Option 1', action: () => console.log('Option 1 selected') },
    { label: 'Option 2', action: () => console.log('Option 2 selected') },
  ],
  position: { x: 200, y: 200 },
};

export const Hover = Template.bind({});
Hover.args = {
  isVisible: true,
  menuItems: [
    { label: 'Option 1', action: () => console.log('Option 1 selected') },
    { label: 'Option 2', action: () => console.log('Option 2 selected') },
  ],
  position: { x: 150, y: 150 },
};