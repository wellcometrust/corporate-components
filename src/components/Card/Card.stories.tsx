import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Card from './Card';
import Readme from './Card.md';

const CardExample = () => {
  const cardHrefText = text('href', 'My section');
  const cardTitleText = text('title', 'My section');

  return <Card href={cardHrefText} title={cardTitleText} />;
};

const stories = storiesOf('Components|Listings', module);

stories.add('Card', CardExample, {
  readme: { sidebar: Readme }
});
