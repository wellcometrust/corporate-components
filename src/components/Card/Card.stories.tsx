import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Card from './Card';
import Readme from './Card.md';

const CardExample = () => {
  const generalGroupID = 'General';
  const imageGroupID = 'Image';
  const metaGroupID = 'Meta';

  const isVertical = boolean(
    'Toggle horizontal / vertical',
    true,
    generalGroupID
  );
  const description = text(
    'description',
    'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
    generalGroupID
  );
  const href = text(
    'href',
    '/news/our-response-covid-19-will-help-define-21st-century',
    generalGroupID
  );
  const title = text(
    'title',
    'Our response to COVID-19 will help define the 21st century',
    generalGroupID
  );

  // Image props
  const image = {
    alt: text('alt', 'Image alt text', imageGroupID),
    src: text('src', 'https://placehold.it/600x342', imageGroupID)

    // TODO: handle responsive image sources
    // sources: {
    //   thumbnail_lo: text('thumbnail_lo', 'https://placehold.it/300x171', imageGroupID),
    //   thumbnail: text('thumbnail', 'https://placehold.it/600x342', imageGroupID),
    //   thumbnail_hi: text('thumbnail_hi', 'https://placehold.it/900x513', imageGroupID)
    // }
  };

  // Meta props
  const meta = {
    date: text('date', '24 July 2020', metaGroupID),
    type: text('type', 'Funding scheme', metaGroupID)
  };

  return (
    <Card
      authors={['Eliza Manningham-Buller', 'Jeremy Farrar']}
      className={isVertical ? 'cc-card--vertical' : 'cc-card--horizontal'}
      description={description}
      href={href}
      image={image}
      meta={meta}
      title={title}
      variant="horizontal_card"
    />
  );
};

const stories = storiesOf('Components|Listings', module);

stories.add('Card', CardExample, {
  readme: { sidebar: Readme }
});
