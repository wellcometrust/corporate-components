import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Timeline from './Timeline';
import Readme from './Timeline.md';

const TimelineExample = () => {
  const generalID = 'General';
  const milestone1ID = 'Milestone 1';
  const milestone2ID = 'Milestone 2';
  const milestone3ID = 'Milestone 3';

  const title = text('title', 'Beatles Albums', generalID);

  const milestones = [
    {
      body: text('Milestone 1 body', 'This is the body text', milestone1ID),
      date: text('Milestone 1 date', '1964', milestone1ID),
      linkHref: text(
        'Milestone 1 link href',
        '/beatles-for-sale',
        milestone1ID
      ),
      linkText: text(
        'Milestone 1 link text',
        'Read more about Beatles for Sale',
        milestone1ID
      ),
      title: text('Milestone 1 title', 'Beatles for Sale', milestone1ID)
    },
    {
      body: text('Milestone 2 body', 'This is the body text', milestone2ID),
      date: text('Milestone 2 date', '1965', milestone2ID),
      linkHref: text('Milestone 2 link href', '/help', milestone2ID),
      linkText: text(
        'Milestone 2 link text',
        'Read more about Help',
        milestone2ID
      ),
      title: text('Milestone 2 title', 'Help', milestone2ID)
    },
    {
      body: text('Milestone 3 body', 'This is the body text', milestone3ID),
      date: text('Milestone 3 date', '1965', milestone3ID),
      linkHref: text('Milestone 3 link href', '/rubber-soul', milestone3ID),
      linkText: text(
        'Milestone 3 link text',
        'Read more about Rubber Soul',
        milestone3ID
      ),
      title: text('Milestone 3 title', 'Rubber Soul', milestone3ID)
    }
  ];

  return <Timeline milestones={milestones} title={title} />;
};

const stories = storiesOf('Components|Timeline', module);

stories.add('Timeline', TimelineExample, {
  readme: { sidebar: Readme }
});
