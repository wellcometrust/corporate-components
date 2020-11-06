import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { parseHtml } from 'utils/parse-html';

import FeaturedPromo from './FeaturedPromo';

const FeaturedPromoExample = () => {
  const author = text('Author', 'Jeremy Farrar');

  const imageAlt = text('Image alt text', 'Alternative image text');
  const imageSrc = text('Image path', `https://via.placeholder.com/300`);

  const title = text('Title', 'My section');
  const titleAs = select('Title element', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3');

  const excerpt = text(
    'Excerpt',
    `<p>Nulla non Lorem in fugiat dolore aliquip ad irure reprehenderit reprehenderit proident.</p>`
  );

  const topic = text('Topic', 'Climate Change');

  const url = text('URL', '/news/all');

  return (
    <FeaturedPromo
      author={author}
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      excerpt={parseHtml(excerpt)}
      imageAlt={imageAlt}
      imageSrc={`${imageSrc}?text=${imageAlt}`}
      title={title}
      titleAs={titleAs}
      topic={topic}
      url={url}
    />
  );
};

const stories = storiesOf('Components|FeaturedPromo', module);

stories.add('FeaturedPromo', FeaturedPromoExample);
