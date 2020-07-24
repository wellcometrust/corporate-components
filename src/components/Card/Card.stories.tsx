import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Card from './Card';
import Readme from './Card.md';

const CardExample = () => {
  const cardTitleText = text('Title', 'My section');

  return <Card title={cardTitleText} />;
};

const stories = storiesOf('Components|Listings', module);

stories.add('Card', CardExample, {
  readme: { sidebar: Readme }
});
