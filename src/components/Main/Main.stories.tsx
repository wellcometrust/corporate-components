import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Main from './Main';
import Readme from './Main.md';

const MainExample = () => {
  const mainText = text(
    'text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et optio eaque quas explicabo nulla asperiores eum placeat quo nam sequi provident possimus quos, adipisci doloremque nihil minus ab nobis illo.'
  );
  const mainClassName = text('className', '');

  return (
    <Main className={mainClassName}>
      <p>{mainText}</p>
    </Main>
  );
};

const stories = storiesOf('Components|Main', module);

stories.add('Main', MainExample, { readme: { sidebar: Readme } });
