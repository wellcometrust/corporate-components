import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import ResultItem from './ResultItem';

const ResultItemExample = () => {
  const metaGroupID = 'Meta';
  const fileMetaGroupID = 'File Meta';

  const title = text('Title', 'Senior Research Fellowships');
  const content = text(
    'Text',
    'Supporting independent researchers who are emerging as global leaders in their field and want to tackle the most important questions in science.'
  );
  const href = text('href', '#');
  const type = select('type', [null, 'file'], null);

  const meta = {
    type: text('Type', 'Funding scheme', metaGroupID),
    date: text('Date', '8 July 2016', metaGroupID),
    lastUpdated: text('Last Updated', '10 July 2016', metaGroupID)
  };

  const fileMeta = {
    type: select('Type', ['PDF', 'DOC', 'MP3'], 'PDF', fileMetaGroupID),
    size: text('Size', '257kb', fileMetaGroupID)
  };

  return (
    <ResultItem
      meta={meta}
      title={title}
      href={href}
      text={content}
      fileMeta={fileMeta}
      type={type}
    />
  );
};

const stories = storiesOf('Components|ResultItem', module);

stories.add('ResultItem', ResultItemExample);
