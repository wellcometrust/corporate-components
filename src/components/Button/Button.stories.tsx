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
      'arrow',
      'chevron',
      'chevronRight',
      'close',
      'closeBold',
      'closeCircle',
      'cookie',
      'download',
      'email',
      'externalLink',
      'facebook',
      'info',
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
  const iconPlacementSwitch = boolean('iconPlacementSwitch', false);
  const variant = select(
    'variant',
    ['primary', 'secondary', 'ghost', 'link', 'unstyled'],
    'primary'
  );

  return (
    <Button
      disabled={disabled}
      href={href}
      icon={icon}
      iconPlacementSwitch={iconPlacementSwitch}
      variant={variant}
    >
      {buttonText}
    </Button>
  );
};

const stories = storiesOf('Components|Button', module);

stories.add('Button', ButtonExample, { readme: { sidebar: Readme } });
