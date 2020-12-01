import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import TextCard from './TextCard';

const TextCardExample = () => {
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
    <TextCard
      description={content}
      href={href}
      fileMeta={fileMeta}
      meta={meta}
      title={title}
      type={type}
    />
  );
};

const stories = storiesOf('TextCard', module);

stories.add('TextCard', TextCardExample);
