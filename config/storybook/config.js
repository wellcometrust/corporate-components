import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

function loadStories() {
  const req = require.context('../../src', true, /\.stories\.js$/);

  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <>
    {story()}
  </>
));

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

configure(loadStories, module);
