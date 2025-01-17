import React from 'react';
import { Meta, Story } from '@storybook/react';
import PanControls, { PanControlsProps } from './PanControls';

export default {
  title: 'component/Map Navigation/PanControls',
  component: PanControls,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PanControlsProps> = (args) => <PanControls {...args} />;

export const Default = Template.bind({});
Default.args = {
  onPan: (direction) => console.log(`Panning ${direction}`),
};

export const Panning = Template.bind({});
Panning.args = {
  onPan: (direction) => console.log(`Panning ${direction}`),
};

export const Idle = Template.bind({});
Idle.args = {
  onPan: (direction) => console.log(`Panning ${direction}`),
};

export const Hover = Template.bind({});
Hover.args = {
  onPan: (direction) => console.log(`Panning ${direction}`),
};
Hover.parameters = {
  pseudo: { hover: true },
};