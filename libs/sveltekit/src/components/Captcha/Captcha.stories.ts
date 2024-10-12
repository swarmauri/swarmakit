import Captcha from './Captcha.svelte';

export default {
  title: 'Components/Forms',
  component: Captcha,
  tags: ['autodocs']
};

export const Default = {
  args: {
    solved: false,
    error: false
  }
};

export const Solved = {
  args: {
    ...Default.args,
    solved: true
  }
};

export const Error = {
  args: {
    ...Default.args,
    error: true
  }
};