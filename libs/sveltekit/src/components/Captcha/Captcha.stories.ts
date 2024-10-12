import Captcha from './Captcha.svelte';

export default {
  title: 'Components/Forms/Captcha',
  component: Captcha,
  tags: ['autodocs'],
  argTypes: {
    onSolve: { action: 'solved' },
    onError: { action: 'error' },
  },
};

const Template = (args) => ({
  Component: Captcha,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  question: 'What is 2 + 2?',
  answer: '4',
};

export const Solved = Template.bind({});
Solved.args = {
  question: 'What is 2 + 2?',
  answer: '4',
  onSolve: () => console.log('Captcha solved!'),
};

export const Error = Template.bind({});
Error.args = {
  question: 'What is 2 + 2?',
  answer: '4',
  onError: () => console.log('Error occurred!'),
};