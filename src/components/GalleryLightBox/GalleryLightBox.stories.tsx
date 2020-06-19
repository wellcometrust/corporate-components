import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryLightBox from './GalleryLightBox';
import Readme from './GalleryLightBox.md';

const dummySlides = [
  {
    src: 'https://i.ytimg.com/vi/N9j9s4IdN5o/hqdefault.jpg',
    caption: '<p>I am the caption</p>',
    license: 'Creative Commons',
    credit: 'Mike Bassett',
    fileSize: 762687
  },
  {
    src: 'https://i.ytimg.com/vi/N9j9s4IdN5o/hqdefault.jpg',
    caption: '<p>I am the caption</p>',
    license: 'All rights reserved',
    credit: 'Mike Bassett',
    fileSize: 126467
  }
];

const GalleryLightBoxExample = () => {
  // TODO: #6844 render GalleryLightbox storybook component
  return <GalleryLightBox slides={dummySlides} isOpen />;
};

const stories = storiesOf('Components|Gallery', module);

stories.add('GalleryLightBox', GalleryLightBoxExample, {
  readme: { sidebar: Readme }
});
