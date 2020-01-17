import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ResultItem from './ResultItem';

const ResultListExample = () => {
  const meta = {
    type: text('meta type', 'Funding scheme'),
    date: text('meta date', '8 July 2016'),
    lastUpdated: text('meta last updated', '1 November 2018')
  };
  const title = text('title', 'Senior Research Fellowships');
  const href = text('href', '');
  const content = text(
    'desc',
    'Supporting independent researchers who are emerging as global leaders in their field and want to tackle the most important questions in science.'
  );

  return <ResultItem title={title} href={href} text={content} />;
};

const stories = storiesOf('Components|ResultItem', module);

stories.add('ResultItem', ResultListExample);
