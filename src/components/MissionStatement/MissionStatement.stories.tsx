import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { parseHtml } from 'utils/parse-html';

import MissionStatement from './MissionStatement';

const MissionStatementExample = () => {
  const title = text('Title', 'Our mission');
  const mainText = text(
    'Text',
    '<p>We support <a href="">discovery research</a> into life, health and wellbeing, and we’re taking on three worldwide health challenges: <a href="">mental health</a>, <a href="">global heating</a> and <a href="">infectious diseases</a>.</p>'
  );
  const linkText = text('Link text', 'Learn more about what we do');

  return (
    <MissionStatement
      linkText={linkText}
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      text={parseHtml(mainText)}
      title={title}
    />
  );
};

const stories = storiesOf('MissionStatement', module);

stories.add('MissionStatement', MissionStatementExample);
