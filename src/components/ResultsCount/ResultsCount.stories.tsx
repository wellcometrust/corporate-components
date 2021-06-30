import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ResultsCount from 'ResultsCount';

const ResultsCountExample = () => {
  const sortedBy = text('Sorted by', 'last updated');
  return (
    <ResultsCount
      currentCount="1-20"
      id="example1"
      resultsCount={50}
      sortedBy={sortedBy}
    />
  );
};

const ResultsCountDropdownExample = () => {
  const [selected, setSelected] = useState<string>('');
  const options = [
    { label: 'Most Viewed', value: 'Most Viewed' },
    { label: 'Alphabetical Order', value: 'Alphabetical Order' },
    { label: 'Most Relevant', value: 'Most Relevant' }
  ];

  return (
    <ResultsCount
      currentCount="1-20"
      id="example2"
      onChange={event => setSelected(event.target.value)}
      options={options}
      resultsCount={50}
      selectedValue={selected}
    />
  );
};

const stories = storiesOf('Components/ResultsCount', module);

stories.add('Simple', ResultsCountExample);
stories.add('With dropdown', ResultsCountDropdownExample);
