import React from 'react';
import { Meta, Story } from '@storybook/react';
import CurrentLocationButton, { CurrentLocationButtonProps } from './CurrentLocationButton';

export default {
  title: 'component/Map Navigation/CurrentLocationButton',
  component: CurrentLocationButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CurrentLocationButtonProps> = (args) => <CurrentLocationButton {...args} onClick={() => {}} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  disabled: false,
  searching: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  disabled: false,
  searching: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  active: false,
  disabled: true,
  searching: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  active: false,
  disabled: false,
  searching: false,
};

export const Searching = Template.bind({});
Searching.args = {
  active: false,
  disabled: false,
  searching: true,
};