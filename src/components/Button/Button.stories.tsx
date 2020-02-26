import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import Button from './Button';
import Readme from './Button.md';

const ButtonExample = () => {
  const buttonText = text('button text', 'Click me');
  const buttonType = select(
    'buttonType',
    ['primary', 'secondary', 'ghost', 'link', 'unstyled'],
    'primary'
  );
  const disabled = boolean('disabled', false);
  const href = text('href', '');
  const icon = select(
    'icon',
    [
      '',
      'arrow',
      'chevron',
      'close',
      'closeBold',
      'closeCircle',
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
  const iconPlacementSwitch = boolean('iconPlacementSwitch', false);

  return (
    <Button
      buttonType={buttonType}
      disabled={disabled}
      href={href}
      icon={icon}
      iconPlacementSwitch={iconPlacementSwitch}
    >
      {buttonText}
    </Button>
  );
};

const stories = storiesOf('Components|Button', module);

stories.add('Button', ButtonExample, { readme: { sidebar: Readme } });
