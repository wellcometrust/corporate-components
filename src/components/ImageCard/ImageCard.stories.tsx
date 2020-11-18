import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import ImageCard from './ImageCard';

const ImageCardExample = () => {
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

const stories = storiesOf('Components|ImageCard', module);

stories.add('ImageCard', ImageCardExample);
