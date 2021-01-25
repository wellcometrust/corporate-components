import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import StatisticCard from './StatisticCard';
import Readme from './StatisticCard.md';

const StatisticCardExample = () => {
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

const stories = storiesOf('Components|Listings', module);

stories.add('StatisticCard', StatisticCardExample, {
  readme: { sidebar: Readme }
});
