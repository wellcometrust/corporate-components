import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import GalleryLightBox from './GalleryLightBox';
import Readme from './GalleryLightBox.md';

const GalleryLightBoxExample = () => {
  return <GalleryLightBox />;
};

const stories = storiesOf('Components|Gallery', module);

stories.add('GalleryLightBox', GalleryLightBoxExample, {
  readme: { sidebar: Readme }
});
