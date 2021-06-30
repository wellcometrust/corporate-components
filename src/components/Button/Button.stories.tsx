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
      'arrowMedium',
      'arrowLong',
      'arrowReverse',
      'checkmark',
      'chevron',
      'close',
      'closeMedium',
      'closeBold',
      'closeCircle',
      'cookie',
      'download',
      'email',
      'externalLink',
      'exclamationMark',
      'facebook',
      'info',
      'linkedin',
      'message',
      'phone',
      'plus',
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
    ['primary', 'secondary', 'tertiary', 'link', 'unstyled'],
    'primary'
  );

  return (
    <Button
      href={href}
      icon={icon}
      iconPlacementSwitch={iconPlacementSwitch}
      isDisabled={disabled}
      variant={variant}
    >
      {buttonText}
    </Button>
  );
};

const stories = storiesOf('Components/Button', module);

stories.add('Button', ButtonExample, { readme: { sidebar: Readme } });
