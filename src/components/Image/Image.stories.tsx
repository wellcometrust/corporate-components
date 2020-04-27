import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Image from './Image';
import Readme from './Image.md';

const ImageExample = () => {
  const ImageText = text('alt', 'Image description');

  return (
    <Image
      src="https://placehold.it/800x450&text=aspect+ratio+16:9"
      alt={ImageText}
    />
  );
};

const stories = storiesOf('Components|Image', module);

stories.add('Image', ImageExample, {
  readme: { sidebar: Readme }
});
