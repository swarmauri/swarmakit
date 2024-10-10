import React from 'react';
import HeaderNavbar from './HeaderNavbar';

export default {
  title: 'Components/HeaderNavbar',
  component: HeaderNavbar,
  argTypes: {
    links: { control: 'array' },
    logo: { control: 'text' },
    onLinkClick: { action: 'link clicked' },
  },
};

const Template = (args) => <HeaderNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: ['Home', 'About', 'Contact'],
  logo: 'https://via.placeholder.com/50',
};

export const WithAdditionalLink = Template.bind({});
WithAdditionalLink.args = {
  ...Default.args,
  links: [...Default.args.links, 'Blog'],
};