import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import ImageCard from './ImageCard';

const SingleImageCard = () => {
  const authors = text(
    'authors',
    'Christiane Hertz-Fowler, Georgia Walton, Chonnettia Jones'
  );

  const date = text('Date', '03/08/1991');

  const imageAlt = text('Image alt text', 'Alternative image text');
  const imageSrc = text('Image path', `https://via.placeholder.com/300`);

  const title = text('Title', 'My section');
  const titleAs = select('Title element', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3');

  const topic = text('Topic', 'Climate Change');

  const url = text('URL', '/news/all');

  return (
    <ImageCard
      authors={authors
        .trim()
        .split(',')
        .map(a => a.trim())}
      date={date}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
      titleAs={titleAs}
      topic={topic}
      url={url}
    />
  );
};

const MultipleImageCard = () => {
  const cardCount = select('How many ImageCards?', [2, 3], 3, 'General');

  const knobs = [...Array(cardCount).keys()].map(i => ({
    authors: text(
      'authors',
      'Christiane Hertz-Fowler, Georgia Walton, Chonnettia Jones',
      `Card ${i + 1}`
    ),
    date: text('Date', '03/08/1991', `Card ${i + 1}`),
    imageAlt: text('Image alt text', 'Alternative image text', `Card ${i + 1}`),
    imageSrc: text(
      'Image path',
      `https://via.placeholder.com/300`,
      `Card ${i + 1}`
    ),
    title: text('Title', 'My section', `Card ${i + 1}`),
    titleAs: select(
      'Title element',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h3',
      `Card ${i + 1}`
    ),
    topic: text('Topic', 'Climate Change', `Card ${i + 1}`),
    url: text('URL', '/news/all', `Card ${i + 1}`)
  }));

  return (
    <div
      style={{
        /**
         * todo: Render ImageCard with Listing
         *
         * This will mean we can render multiple ImageCard components
         * by passing the data to the Listing component, and move the styles
         * + DOM from here to be handled by that component + Sass (for the styles)
         *
         * @see {@link https://github.com/wellcometrust/corporate/issues/7750}
         */
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        marginLeft: 'calc(-1 * var(--space-xl))'
      }}
    >
      {[...Array(cardCount).keys()].map(i => (
        <div
          style={{
            flexBasis: '33.33%',
            flexGrow: 1,
            marginBottom: 'var(--space-unit)',
            marginLeft: 'var(--space-xl)'
          }}
        >
          <ImageCard
            authors={knobs[i].authors
              .trim()
              .split(',')
              .map(a => a.trim())}
            date={knobs[i].date}
            imageAlt={knobs[i].imageAlt}
            imageSrc={knobs[i].imageSrc}
            title={knobs[i].title}
            titleAs={knobs[i].titleAs}
            topic={knobs[i].topic}
            url={knobs[i].url}
          />
        </div>
      ))}
    </div>
  );
};

const stories = storiesOf('ImageCard', module);

stories.add('Single', SingleImageCard);
stories.add('Multiple', MultipleImageCard);
