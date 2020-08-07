import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Card from './Card';
import Readme from './Card.md';

const CardExample = () => {
  const isVertical = boolean('Toggle horizontal / vertical', true);
  const date = text('date', '24 July 2020');
  const description = text('description', 'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.');
  const href = text('href', '/news/our-response-covid-19-will-help-define-21st-century');
  const title = text('title', 'Our response to COVID-19 will help define the 21st century');
  const image = {
    alt: text('alt', 'Image alt text'),
    sources: {
      thumbnail_lo: text('thumbnail_lo', 'https://placehold.it/300x171'),
      thumbnail: text('thumbnail', 'https://placehold.it/600x342'),
      thumbnail_hi: text('thumbnail_hi', 'https://placehold.it/900x513')
    }
  };
  const meta = text('meta', 'Opinion');

  return (
    <Card
      authors={['Jeremy Farrar']}
      className={isVertical ? 'card--vertical' : 'card--horizontal'}
      date={date}
      description={description}
      href={href}
      image={image}
      meta={meta}
      title={title}
    />
  );
};

const stories = storiesOf('Components|Listings', module);

stories.add('Card', CardExample, {
  readme: { sidebar: Readme }
});
