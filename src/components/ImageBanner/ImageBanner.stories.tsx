import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ImageBanner from './ImageBanner';
import Readme from './ImageBanner.md';

const ImageExample = () => {
  const AltText = text('alt', 'ImageBanner alt text');
  const CaptionText = text('caption', 'ImageBanner caption');
  const CreditText = text('credit', 'ImageBanner credit');

  return (
    <ImageBanner
      alt={AltText}
      caption={CaptionText}
      credit={CreditText}
      src="https://placehold.it/768x432&text=default+image+(768w)"
      srcSet="https://placehold.it/400x225 400w, https://placehold.it/768x432 768w, https://placehold.it/1024x576 1024w"
    />
  );
};

const stories = storiesOf('Components|Image', module);

stories.add('ImageBanner', ImageExample, {
  readme: { sidebar: Readme }
});
