import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import SkipLink from 'SkipLink';
import Readme from './SkipLink.md';

const SkipLinkExample = () => {
  const skipLinkText = text('text', 'Skip to main content');
  const position = select('position', ['float', 'static'], 'static');

  return (
    <>
      <p>
        To view the skip link component tab to this example, or click inside
        this example and press tab.
      </p>

      <SkipLink href="#" position={position} text={skipLinkText} />
    </>
  );
};

const stories = storiesOf('SkipLink', module);

stories.add('SkipLink', SkipLinkExample, {
  readme: { sidebar: Readme }
});
