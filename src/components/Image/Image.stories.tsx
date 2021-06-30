import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Image from './Image';
import Readme from './Image.md';

const ImageExample = () => {
  const AltText = text('alt', 'Image alt text');
  const CaptionText = text('caption', 'Image caption');
  const CreditText = text('credit', 'Image credit');

  return (
    <Image
      alt={AltText}
      caption={CaptionText}
      credit={CreditText}
      src="https://placehold.it/768x432&text=default+image+(768w)"
      srcSet="https://placehold.it/400x225 400w, https://placehold.it/768x432 768w, https://placehold.it/1024x576 1024w"
    />
  );
};

const stories = storiesOf('Components/Image', module);

stories.add('Image', ImageExample, {
  readme: { sidebar: Readme }
});
