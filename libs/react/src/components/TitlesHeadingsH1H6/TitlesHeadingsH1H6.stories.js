import React from 'react';
import TitlesHeadingsH1H6 from './TitlesHeadingsH1H6';

export default {
  title: 'Components/TitlesHeadingsH1H6',
  component: TitlesHeadingsH1H6,
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    color: { control: 'color' },
    align: { control: 'select', options: ['left', 'center', 'right'] },
  },
};

const Template = (args) => <TitlesHeadingsH1H6 {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 1,
  text: 'This is a Heading',
  color: 'black',
  align: 'left',
};

export const CenteredHeading = Template.bind({});
CenteredHeading.args = {
  level: 2,
  text: 'Centered Heading',
  color: 'darkblue',
  align: 'center',
};

export const RedHeading = Template.bind({});
RedHeading.args = {
  level: 3,
  text: 'Red Heading',
  color: 'red',
  align: 'right',
};