import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

import './styles/storybook-app.scss';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(addReadme);

addParameters({
  options: {
    theme: {
      brandTitle: 'Wellcome Design System'
    },
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});
