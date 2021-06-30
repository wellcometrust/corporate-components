import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Video from './Video';
import Readme from './Video.md';

const VideoExample = () => {
  const CaptionText = text('caption', 'Video caption');
  const CreditText = text('credit', 'Video credit');
  const VideoSource = text(
    'src',
    'https://www.youtube.com/watch?v=Ha63EJhGoBw&feature=youtu.be'
  );

  return (
    <Video
      caption={CaptionText}
      credit={CreditText}
      id="video"
      src={VideoSource}
    />
  );
};

const stories = storiesOf('Components/Video', module);

stories.add('Video', VideoExample, {
  readme: { sidebar: Readme }
});
