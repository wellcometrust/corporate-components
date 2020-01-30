import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import ResultsItem from './ResultsItem';

const ResultItemExample = () => {
  const generalGroupID = 'General';
  const fileMetaGroupID = 'File Meta';
  const metaGroupID = 'Meta';

  // Main props
  const content = text(
    'text',
    'Supporting independent researchers who are emerging as global leaders in their field and want to tackle the most important questions in science.',
    generalGroupID
  );
  const href = text('href', '#', generalGroupID);
  const title = text('title', 'Senior Research Fellowships', generalGroupID);
  const type = select('type', [null, 'file'], null, generalGroupID);

  // File Meta props
  const fileMeta = {
    type: select('type', ['PDF', 'DOC', 'MP3'], 'PDF', fileMetaGroupID),
    size: text('size', '257kb', fileMetaGroupID)
  };

  // Meta props
  const meta = {
    type: text('type', 'Funding scheme', metaGroupID),
    date: text('date', '8 July 2016', metaGroupID),
    lastUpdated: text('lastUpdated', '10 July 2016', metaGroupID)
  };

  return (
    <ResultsItem
      href={href}
      fileMeta={fileMeta}
      meta={meta}
      text={content}
      title={title}
      type={type}
    />
  );
};

const stories = storiesOf('Components|ResultItem', module);

stories.add('ResultItem', ResultItemExample);
