import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ResultItem from './ResultItem';

const ResultListExample = () => {
  const meta = {
    type: text('Type', 'Funding scheme'),
    date: text('Date', '8 July 2016'),
    lastUpdated: text('Last Updated', '')
  };
  const title = text('Title', 'Senior Research Fellowships');
  const href = text('href', '#');
  const content = text(
    'Desc',
    'Supporting independent researchers who are emerging as global leaders in their field and want to tackle the most important questions in science.'
  );

  return <ResultItem meta={meta} title={title} href={href} text={content} />;
};

const stories = storiesOf('Components|ResultItem', module);

stories.add('ResultItem', ResultListExample);
