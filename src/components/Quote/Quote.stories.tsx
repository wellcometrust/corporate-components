import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Quote from './Quote';
import Readme from './Quote.md';

const QuoteExample = () => {
  const cite = text('cite', 'Citation or quote source');
  const quoteBody = text(
    'text',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget fringilla massa. Quisque ut enim vehicula, volutpat dui et, gravida purus. In eget blandit libero.'
  );
  return <Quote cite={cite} text={quoteBody} />;
};

const stories = storiesOf('Components/Quote', module);

stories.add('Quote', QuoteExample, {
  readme: { sidebar: Readme }
});
