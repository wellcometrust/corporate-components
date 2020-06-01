import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Gallery from './Gallery';
import Readme from './Gallery.md';

const GalleryExample = () => {
  const AltText = text('alt', 'Gallery alt text');
  const CaptionText = text('caption', 'Gallery caption');
  const CreditText = text('credit', 'Gallery credit');

  return <Gallery />;
};

const stories = storiesOf('Components|Gallery', module);

stories.add('Gallery', GalleryExample, {
  readme: { sidebar: Readme }
});
