import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Listing from 'Listing';
import StatisticCard from './StatisticCard';
import Readme from './StatisticCard.md';

const SingleStatisticCard = () => {
  const generalGroupID = 'General';

  const description = text(
    'description',
    'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
    generalGroupID
  );
  const href = text(
    'href',
    '/news/our-response-covid-19-will-help-define-21st-century',
    generalGroupID
  );
  const title = text(
    'title',
    'Our response to COVID-19 will help define the 21st century',
    generalGroupID
  );
  const linkTitle = text('linkTitle', 'Optional text link', generalGroupID);

  return (
    <StatisticCard
      description={description}
      href={href}
      title={title}
      linkTitle={linkTitle}
    />
  );
};

const MultipleStatisticCard = () => {
  const cardCount = select('How many ImageCards?', [2, 3], 3, 'General');

  const knobs = [...Array(cardCount).keys()].map(i => ({
    href: text(
      'href',
      '/news/our-response-covid-19-will-help-define-21st-century',
      `Card ${i + 1}`
    ),
    title: text(
      'Title',
      'Our response to COVID-19 will help define the 21st century',
      `Card ${i + 1}`
    ),
    titleAs: select(
      'Title element',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h3',
      `Card ${i + 1}`
    ),
    description: text(
      'description',
      'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
      `Card ${i + 1}`
    ),
    linkTitle: text('linkTitle', 'Optional text link', `Card ${i + 1}`)
  }));

  return (
    <Listing variant="statistic_card">
      {[...Array(cardCount).keys()].map(i => (
        <StatisticCard
          title={knobs[i].title}
          titleAs={knobs[i].titleAs}
          linkTitle={knobs[i].linkTitle}
          href={knobs[i].href}
          description={knobs[i].description}
        />
      ))}
    </Listing>
  );
};

const stories = storiesOf('StatisticCard', module);

stories.add('SingleStatisticCard', SingleStatisticCard);
stories.add('MultipleStatisticCard', MultipleStatisticCard);
