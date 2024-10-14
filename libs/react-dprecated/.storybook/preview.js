import { themes } from '@storybook/theming';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#333333' },
    ],
  },
  docs: {
    theme: themes.dark, // Default theme for documentation
  },
};
