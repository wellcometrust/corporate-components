// @ts-nocheck
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ResultsList from './ResultsList';

const exampleData = [
  {
    href: '/',
    meta: {
      type: 'News',
      date: '2020-01-02',
      updatedLast: '2020-01-20'
    },
    text: 'Result text 1',
    title: 'Result title 1'
  },
  {
    href: '/',
    meta: {
      type: 'News',
      date: '2020-01-02',
      updatedLast: '2020-01-20'
    },
    text: 'Result text 2',
    title: 'Result title 2'
  },
  {
    href: '/',
    meta: {
      type: 'News',
      date: '2020-01-02',
      updatedLast: '2020-01-20'
    },
    text: 'Result text 3',
    title: 'Result title 3'
  }
];

const ResultsListExample = () => {
  const perPage = text('perPage', '20');

  return <ResultsList perPage={parseInt(perPage, 10)} data={exampleData} />;
};

const stories = storiesOf('Components|ResultsList', module);

stories.add('ResultsList', ResultsListExample);
