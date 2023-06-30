import '../src/index.css';

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const decorators = [mswDecorator]

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};