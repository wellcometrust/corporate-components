import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ImageBanner from './ImageBanner';
import { ViewportContextProvider } from '../ViewportContext/ViewportContext';

import Readme from './ImageBanner.md';

const ImageBannerExample = () => {
  const AltText = text('alt', 'ImageBanner alt text');
  const CaptionText = text('caption', 'ImageBanner caption');
  const CreditText = text('credit', 'ImageBanner credit');

  return (
    <ViewportContextProvider>
      <ImageBanner
        alt={AltText}
        caption={CaptionText}
        credit={CreditText}
        src="https://placehold.it/768x432&text=default+image+(768w)"
        srcSet="https://placehold.it/400x225 400w, https://placehold.it/768x432 768w, https://placehold.it/1024x576 1024w"
      />
    </ViewportContextProvider>
  );
};

const stories = storiesOf('Components|Page header', module);

stories.add('ImageBanner', ImageBannerExample, {
  readme: { sidebar: Readme }
});
