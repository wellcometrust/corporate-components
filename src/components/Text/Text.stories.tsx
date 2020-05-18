import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Text from './Text';
import Readme from './Text.md';

const TextExample = () => {
  const textClassName = text('className', '');
  const textContent = text('Content', 'My section');

  return <Text className={textClassName}>{textContent}</Text>;
};

const stories = storiesOf('Components|Text', module);

stories.add('Text', TextExample, {
  readme: { sidebar: Readme }
});
