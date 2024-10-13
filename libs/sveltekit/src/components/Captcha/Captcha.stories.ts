import Captcha from './Captcha.svelte';

export default {
  title: 'Forms/Captcha',
  component: Captcha,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Please solve the captcha',
    solved: false,
    error: false,
  },
};

export const Solved = {
  args: {
    label: 'Captcha Solved',
    solved: true,
    error: false,
  },
};

export const Error = {
  args: {
    label: 'Please solve the captcha',
    solved: false,
    error: true,
    errorMessage: 'Incorrect, please try again',
  },
};