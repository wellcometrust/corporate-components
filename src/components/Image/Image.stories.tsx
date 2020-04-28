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
      src="https://placehold.it/800x450&text=aspect+ratio+16:9"
      caption={CaptionText}
      credit={CreditText}
    />
  );
};

const stories = storiesOf('Components|Image', module);

stories.add('Image', ImageExample, {
  readme: { sidebar: Readme }
});
