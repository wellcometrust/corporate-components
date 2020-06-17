import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryLightBox from './GalleryLightBox';
import Readme from './GalleryLightBox.md';

const GalleryLightBoxExample = () => {
  // TODO: #6844 render GalleryLightbox storybook component
  return <GalleryLightBox slides={[]} />;
};

const stories = storiesOf('Components|Gallery', module);

stories.add('GalleryLightBox', GalleryLightBoxExample, {
  readme: { sidebar: Readme }
});
