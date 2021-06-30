import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Gallery, { GalleryMedia } from './Gallery';
import Readme from './Gallery.md';

const data = [
  {
    alt: 'alt text',
    canDownload: true,
    caption: 'caption text',
    credit: 'credit',
    fileSize: 10000000,
    height: 1920,
    id: '123',
    licence: 'licence',
    mediaSources: {
      gallery_thumbnail_original: 'https://placehold.it/310x310',
      gallery_thumbnail_original_hi: 'https://placehold.it/310x310',
      gallery_thumbnail_original_mobile: 'https://placehold.it/310x310',
      gallery_thumbnail_original_mobile_hi: 'https://placehold.it/310x310',
      gallery_thumbnail_square: 'https://placehold.it/310x310',
      gallery_thumbnail_square_hi: 'https://placehold.it/310x310',
      gallery_thumbnail_square_mobile: 'https://placehold.it/310x310',
      gallery_thumbnail_square_mobile_hi: 'https://placehold.it/310x310',
      gallery_full: 'https://placehold.it/310x310',
      gallery_full_hi: 'https://placehold.it/310x310',
      gallery_full_mobile: 'https://placehold.it/310x310',
      gallery_full_mobile_hi: 'https://placehold.it/310x310'
    },
    title: 'Image 1',
    width: 1080
  }
];

const GalleryExample = () => {
  return (
    <Gallery>
      {data.map(item => {
        return (
          <GalleryMedia
            alt={item.alt}
            canDownload={item.canDownload}
            caption={item.caption}
            credit={item.credit}
            fileSize={item.fileSize}
            height={item.height}
            key={item.id}
            licence={item.licence}
            mediaSources={item.mediaSources}
            title={item.title}
            width={item.width}
          />
        );
      })}
    </Gallery>
  );
};

const stories = storiesOf('Components/Gallery', module);

stories.add('Gallery', GalleryExample, {
  readme: { sidebar: Readme }
});
