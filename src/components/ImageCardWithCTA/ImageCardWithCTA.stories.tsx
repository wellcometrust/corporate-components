import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Listing from 'Listing';

import ImageCardWithCTA from './ImageCardWithCTA';

const SingleImageCardWithCTA = () => {
  const generalGroupID = 'General';
  const description = text(
    'description',
    'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
    generalGroupID
  );
  const href = text('href', '/news/all');
  const imageAlt = text('Image alt text', 'Alternative image text');
  const imageSrc = text('Image path', `https://via.placeholder.com/300`);
  const linkText = text('linkText', 'Optional text link', generalGroupID);
  const title = text('Title', 'My section');
  const titleAs = select('Title element', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3');

  return (
    <ImageCardWithCTA
      description={description}
      href={href}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      linkText={linkText}
      title={title}
      titleAs={titleAs}
    />
  );
};

const MultipleImageCardWithCTA = () => {
  const cardCount = select('How many ImageCards?', [2, 3], 3, 'General');

  const knobs = [...Array(cardCount).keys()].map(i => ({
    description: text(
      'description',
      'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
      `Card ${i + 1}`
    ),
    href: text('href', '/news/all', `Card ${i + 1}`),
    imageAlt: text('Image alt text', 'Alternative image text', `Card ${i + 1}`),
    imageSrc: text(
      'Image path',
      `https://via.placeholder.com/300`,
      `Card ${i + 1}`
    ),
    linkText: text('linkText', 'Optional text link', `Card ${i + 1}`),
    title: text('Title', 'My section', `Card ${i + 1}`),
    titleAs: select(
      'Title element',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h3',
      `Card ${i + 1}`
    )
  }));

  return (
    <Listing variant="image_card">
      {[...Array(cardCount).keys()].map(i => (
        <ImageCardWithCTA
          description={knobs[i].description}
          href={knobs[i].href}
          imageAlt={knobs[i].imageAlt}
          imageSrc={knobs[i].imageSrc}
          linkText={knobs[i].linkText}
          title={knobs[i].title}
          titleAs={knobs[i].titleAs}
        />
      ))}
    </Listing>
  );
};

const stories = storiesOf('ImageCardWithCTA', module);

stories.add('Single', SingleImageCardWithCTA);
stories.add('Multiple', MultipleImageCardWithCTA);
