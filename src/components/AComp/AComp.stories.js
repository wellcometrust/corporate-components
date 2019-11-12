import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import AComp from './AComp';

const ACompExample = ({ children }) => {
  const compText = text('compText', 'Hello, world!');

  return <AComp>{compText}</AComp>;
};

const stories = storiesOf('Components|AComp', module);

stories.add('AComp', ACompExample);
