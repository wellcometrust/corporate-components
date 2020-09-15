import React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from './Timeline';
import Readme from './Timeline.md';

const TimelineExample = () => {
  return <Timeline />;
};

const stories = storiesOf('Components|Timeline', module);

stories.add('Timeline', TimelineExample, {
  readme: { sidebar: Readme }
});
