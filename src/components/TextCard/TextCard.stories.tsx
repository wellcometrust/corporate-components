import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import TextCard from './TextCard';

const TextCardExample = () => {
  const generalGroupID = 'General';
  const fileMetaGroupID = 'File';
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
  const fileSize = text('File size', '257kb', fileMetaGroupID);
  const fileType = select(
    'File type',
    ['PDF', 'DOCX', 'XLSX'],
    'PDF',
    fileMetaGroupID
  );

  // Meta props
  const date = text('date', '8 July 2016', metaGroupID);
  const dateUpdated = text('lastUpdated', '10 July 2016', metaGroupID);
  const hasMetaLabel = boolean('hasMetaLabel', true, metaGroupID);
  const metaLabel = text('type', 'Funding scheme', metaGroupID);

  return (
    <TextCard
      date={date}
      dateUpdated={dateUpdated}
      description={content}
      hasMetaLabel={hasMetaLabel}
      fileSize={fileSize}
      fileType={fileType}
      href={href}
      metaLabel={metaLabel}
      title={title}
      type={type}
    />
  );
};

const stories = storiesOf('TextCard', module);

stories.add('TextCard', TextCardExample);
