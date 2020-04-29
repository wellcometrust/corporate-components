import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Video from './Video';
import Readme from './Video.md';

const VideoExample = () => {
  const CaptionText = text('caption', 'Video caption');
  const CreditText = text('credit', 'Video credit');
  const VideoSource = text('src', '//www.youtube.com/embed/Ha63EJhGoBw');

  return <Video caption={CaptionText} credit={CreditText} src={VideoSource} />;
};

const stories = storiesOf('Components|Video', module);

stories.add('Video', VideoExample, {
  readme: { sidebar: Readme }
});
