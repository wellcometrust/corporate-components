import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import Button from './Button';
import Readme from './Button.md';

const ButtonExample = () => {
  const buttonText = text('button text', 'Click me');
  const disabled = boolean('disabled', false);
  const href = text('href', '');
  const icon = select(
    'icon',
    [
      '',
      'arrowNarrow',
      'circleCross',
      'close',
      'download',
      'emailAddress',
      'externalLink',
      'facebook',
      'fax',
      'linkedin',
      'message',
      'phone',
      'search',
      'shareLink',
      'tag',
      'twitter',
      'youTube'
    ],
    ''
  );
  const iconPlacement = select('iconPlacement', ['left', 'right'], '');

  return (
    <Button
      disabled={disabled}
      href={href}
      icon={icon}
      iconPlacement={iconPlacement}
    >
      {buttonText}
    </Button>
  );
};

const stories = storiesOf('Components|Button', module);

stories.add('Button', ButtonExample, { readme: { sidebar: Readme } });
