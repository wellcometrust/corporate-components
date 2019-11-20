import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import BComp from './BComp';

const BCompExample = () => {
  const compText = text('compText', 'This is BComp!');

  return <BComp>{compText}</BComp>;
};

const stories = storiesOf('Components|BComp', module);

stories.add('BComp', BCompExample);
