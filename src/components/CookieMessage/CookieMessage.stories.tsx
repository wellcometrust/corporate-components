import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import CookieMessage from 'CookieMessage/CookieMessage';

const MessageExample = () => {
  const isActive = boolean('isActive', true);

  return <CookieMessage isActive={isActive} />;
};

const stories = storiesOf('Components/CookieMessage', module);

stories.add('CookieMessage', MessageExample);
