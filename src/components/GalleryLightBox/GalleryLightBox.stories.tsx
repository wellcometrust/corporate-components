import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryLightBox from './GalleryLightBox';
import Readme from './GalleryLightBox.md';

const GalleryLightBoxExample = () => {
  return <GalleryLightBox isOpen slides={[]} />;
};

const stories = storiesOf('Components|Gallery', module);

stories.add('GalleryLightBox', GalleryLightBoxExample, {
  readme: { sidebar: Readme }
});
