import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Text from './Text';
import Readme from './Text.md';

const TextExample = () => {
  const textClassName = text('className', '');
  // const textContent = text('Content', 'My section');

  return (
    <Text className={textClassName}>
      <h3>Heading 3</h3>
      <p>Paragraph text</p>
      <h4>Heading 4</h4>
      <p>Paragraph text</p>
      <h5>Heading 5</h5>
      <p>Paragraph text</p>
      <h6>Heading 6</h6>
      <p>Paragraph text</p>
    </Text>
  );
};

const stories = storiesOf('Components|Text', module);

stories.add('Text', TextExample, {
  readme: { sidebar: Readme }
});
